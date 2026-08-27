/**
 * Pricing model — ported from the original Lovable export
 * (lovable-export/src/lib/workshops.ts).
 *
 * The per-person subtotal is lifted to the minimum booking, the model fee is
 * added after it, and VAT is applied last.
 *
 * There used to be a separate €50 studio rent, added BEFORE the minimum, meant
 * to make small groups viable. It was dropped: the minimum booking already
 * does that job, and doing it twice made the fee misfire. Because rent landed
 * inside the max(), it was fully absorbed at 6 people and charged in full at 9
 * — the opposite of the intent. The per-person rate covers studio use,
 * materials and guidance; the minimum booking is the floor. One rule.
 */

export type WorkshopSlug = "merchandise" | "life-drawing" | "mixed-media" | "custom";

/**
 * Workshops with a published per-person rate. "custom" is deliberately absent:
 * it is designed per occasion, so any figure we printed would be invented.
 * It is quoted by conversation instead, and excluded from the calculator.
 */
export type PricedSlug = Exclude<WorkshopSlug, "custom">;

/** Minimum workshop booking, excl. VAT, applied to the per-person subtotal. */
export const MINIMUM_BOOKING = 450;
/** Fixed live-model fee for Life Drawing, excl. VAT, added after the minimum. */
export const MODEL_FEE = 150;
export const VAT_RATE = 0.21;

/**
 * Maximum group size the atelier can host, for every workshop.
 * Above this the workshop moves to the client's own location, where there is
 * no stated upper limit. Single source of truth — the prose reads from this.
 */
export const STUDIO_CAPACITY = 12;
/** Smallest group we quote for at the standard rate. */
export const MIN_GROUP = 6;

export const PRICE_PER_PERSON: Record<PricedSlug, number> = {
  merchandise: 65,
  "life-drawing": 55,
  "mixed-media": 60,
};

export interface Estimate {
  pricePerPerson: number;
  participants: number;
  rawSubtotal: number;
  minimumApplied: boolean;
  workshopSubtotal: number;
  modelFee: number;
  subtotalExclVat: number;
  vat: number;
  totalInclVat: number;
  /** True when the group exceeds atelier capacity and must be hosted off-site. */
  offSiteRequired: boolean;
}

export function calculateEstimate(slug: PricedSlug, participants: number): Estimate {
  const people = Math.max(1, Math.floor(participants || 0));
  const offSiteRequired = people > STUDIO_CAPACITY;

  const pricePerPerson = PRICE_PER_PERSON[slug];
  const rawSubtotal = pricePerPerson * people;
  const workshopSubtotal = Math.max(rawSubtotal, MINIMUM_BOOKING);
  const modelFee = slug === "life-drawing" ? MODEL_FEE : 0;
  const subtotalExclVat = workshopSubtotal + modelFee;
  const vat = subtotalExclVat * VAT_RATE;

  return {
    pricePerPerson,
    participants: people,
    rawSubtotal,
    minimumApplied: workshopSubtotal > rawSubtotal,
    workshopSubtotal,
    modelFee,
    subtotalExclVat,
    vat,
    totalInclVat: subtotalExclVat + vat,
    offSiteRequired,
  };
}

export function formatEuro(value: number, locale = "nl-NL"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);
}
