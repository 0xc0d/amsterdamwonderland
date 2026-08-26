/**
 * Structured data (JSON-LD) for every page.
 *
 * Before this file existed, only the two home pages carried any schema at all
 * (16 of 18 built pages emitted zero `application/ld+json` blocks), and the one
 * LocalBusiness object had no telephone, no logo, no sameAs and no prices.
 *
 * Everything here is emitted as a single `@graph` with stable `@id`s, so the
 * business and the website are declared once and every page node points at
 * them by reference instead of repeating them. That is what lets Google treat
 * eighteen pages as one business rather than eighteen unrelated ones.
 *
 * HARD RULE: nothing in here may assert a fact the site cannot back up. No
 * opening hours (bookings are by arrangement) and no aggregateRating, because
 * there are no reviews to aggregate. Inventing either is a manual-action risk,
 * and it would also be a lie.
 *
 * The address and coordinates ARE now asserted, because they were verified:
 * Ali gave the street address, and Google's own resolved place URL and an
 * independent OpenStreetMap lookup both returned postcode 1012 DC with the
 * building at 52.3728361, 4.8985544. See src/lib/config.ts.
 */
import {
  EMAIL,
  GEO,
  INSTAGRAM,
  PHONE_E164,
  POSTAL_CODE,
  STREET_ADDRESS,
  hasPhone,
  hasPreciseLocation,
  mapsHref,
} from "./config";
import {
  MINIMUM_BOOKING,
  MIN_GROUP,
  MODEL_FEE,
  PRICE_PER_PERSON,
  STUDIO_CAPACITY,
  type WorkshopSlug,
} from "./pricing";
import { getWorkshops, priceLabel } from "../content/workshops";
import { localePath, type Locale } from "../i18n";

/** One question and its answer, rendered on the page AND fed to the schema. */
export interface FaqItem {
  q: string;
  a: string;
}

export interface Crumb {
  name: string;
  /** Locale-agnostic path, e.g. "/workshops". Omit for the current page. */
  path?: string;
}

type Json = Record<string, unknown>;

const langTag = (locale: Locale) => (locale === "nl" ? "nl-NL" : "en-GB");

/**
 * The business. One node, one `@id`, referenced from everywhere.
 * `@id` deliberately has no locale in it: there is one business, not two.
 */
function business(site: string, locale: Locale, workshops: ReturnType<typeof getWorkshops>): Json {
  const address: Json = {
    "@type": "PostalAddress",
    addressLocality: "Amsterdam",
    addressRegion: "Noord-Holland",
    addressCountry: "NL",
  };
  // Only claim a street once someone has actually given us one.
  if (STREET_ADDRESS) address.streetAddress = STREET_ADDRESS;
  if (POSTAL_CODE) address.postalCode = POSTAL_CODE;

  const node: Json = {
    "@type": "LocalBusiness",
    "@id": `${site}/#business`,
    name: "Wonderland Workshops",
    alternateName: "Amsterdam Wonderland",
    description:
      locale === "nl"
        ? "Kunstworkshops in Amsterdam voor bedrijven, teams en groepen, gegeven door twee Amsterdamse kunstenaars."
        : "Art workshops in Amsterdam for companies, teams and groups, run by two Amsterdam based artists.",
    url: site,
    logo: `${site}/og.png`,
    image: `${site}/og.png`,
    email: EMAIL,
    address,
    areaServed: [
      { "@type": "City", name: "Amsterdam" },
      { "@type": "Country", name: "Netherlands" },
    ],
    knowsLanguage: ["nl", "en", "fr"],
    currenciesAccepted: "EUR",
    // Google reads this as a band, not an exact figure, so a symbol is the
    // honest form. The real numbers are in makesOffer below.
    priceRange: "€€",
    sameAs: [INSTAGRAM],
    founder: [
      { "@type": "Person", name: "Marie" },
      { "@type": "Person", name: "Mette" },
    ],
    makesOffer: workshops.map((w) => ({
      "@type": "Offer",
      name: w.title,
      description: w.tagline,
      url: `${site}${localePath(locale, `/workshops/${w.slug}`)}`,
      ...offerPrice(w.slug),
      itemOffered: {
        "@type": "Service",
        name: w.title,
        serviceType: locale === "nl" ? "Kunstworkshop" : "Art workshop",
      },
    })),
  };
  if (hasPhone) node.telephone = `+${PHONE_E164}`;
  if (hasPreciseLocation) {
    node.geo = { "@type": "GeoCoordinates", ...GEO };
    node.hasMap = mapsHref;
  }
  return node;
}

/**
 * Price fields for one workshop. "custom" is quoted per occasion, so it gets no
 * number at all rather than an invented one.
 */
function offerPrice(slug: WorkshopSlug): Json {
  if (slug === "custom") return { availability: "https://schema.org/InStock" };
  return {
    priceCurrency: "EUR",
    price: PRICE_PER_PERSON[slug],
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "EUR",
      price: PRICE_PER_PERSON[slug],
      unitText: "person",
      valueAddedTaxIncluded: false,
    },
    eligibleQuantity: {
      "@type": "QuantitativeValue",
      minValue: MIN_GROUP,
      unitText: "person",
    },
    availability: "https://schema.org/InStock",
  };
}

function website(site: string, locale: Locale): Json {
  return {
    "@type": "WebSite",
    "@id": `${site}/#website`,
    url: site,
    name: "Wonderland Workshops",
    inLanguage: langTag(locale),
    publisher: { "@id": `${site}/#business` },
  };
}

function breadcrumbs(site: string, locale: Locale, crumbs: Crumb[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.path === undefined ? {} : { item: `${site}${localePath(locale, c.path)}` }),
    })),
  };
}

/** The Service node for a single workshop's own page. */
function service(site: string, locale: Locale, slug: WorkshopSlug, canonical: string): Json | null {
  const w = getWorkshops(locale).find((x) => x.slug === slug);
  if (!w) return null;
  return {
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: w.title,
    serviceType: locale === "nl" ? "Kunstworkshop in Amsterdam" : "Art workshop in Amsterdam",
    description: w.intro,
    url: canonical,
    provider: { "@id": `${site}/#business` },
    areaServed: { "@type": "City", name: "Amsterdam" },
    audience: {
      "@type": "Audience",
      audienceType:
        locale === "nl"
          ? "Bedrijven, teams, vriendengroepen en particulieren"
          : "Companies, teams, friend groups and individuals",
    },
    offers: {
      "@type": "Offer",
      url: canonical,
      priceSpecification:
        slug === "custom"
          ? undefined
          : {
              "@type": "UnitPriceSpecification",
              priceCurrency: "EUR",
              price: PRICE_PER_PERSON[slug],
              unitText: "person",
              valueAddedTaxIncluded: false,
              description: priceLabel(locale, slug),
            },
      availability: "https://schema.org/InStock",
      ...(slug === "custom" ? {} : { priceCurrency: "EUR", price: PRICE_PER_PERSON[slug] }),
    },
  };
}

export interface GraphInput {
  site: string;
  locale: Locale;
  canonical: string;
  title: string;
  description: string;
  ogImage: string;
  /** Extra type for the page node, e.g. "AboutPage", "CollectionPage". */
  pageType?: string;
  crumbs?: Crumb[];
  faq?: FaqItem[];
  /** Set on a workshop's own page to emit its Service and Offer. */
  workshopSlug?: WorkshopSlug;
}

/**
 * Build the whole graph for one page.
 *
 * A note on FAQ: Google restricted FAQ *rich results* to authoritative
 * government and health sites in August 2023, so these questions will almost
 * certainly not draw an expanded snippet. They are here because the answers
 * are what people actually search ("do I need to be able to draw",
 * "how many people fit"), because AI answer engines read them, and because the
 * markup costs nothing. Do not promise Ali a rich result from this.
 */
export function buildGraph(input: GraphInput): Json {
  const { site, locale, canonical, title, description, ogImage } = input;
  const workshops = getWorkshops(locale);

  const page: Json = {
    "@type": input.faq?.length
      ? ["WebPage", "FAQPage"]
      : input.pageType
        ? ["WebPage", input.pageType]
        : "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: langTag(locale),
    isPartOf: { "@id": `${site}/#website` },
    about: { "@id": `${site}/#business` },
    primaryImageOfPage: ogImage,
  };

  if (input.faq?.length) {
    page.mainEntity = input.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }));
  }

  const graph: Json[] = [business(site, locale, workshops), website(site, locale), page];

  if (input.crumbs?.length) {
    const bc = breadcrumbs(site, locale, input.crumbs);
    bc["@id"] = `${canonical}#breadcrumb`;
    page.breadcrumb = { "@id": `${canonical}#breadcrumb` };
    graph.push(bc);
  }

  if (input.workshopSlug) {
    const s = service(site, locale, input.workshopSlug, canonical);
    if (s) graph.push(s);
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Plain-language facts reused by the FAQ answers, so numbers stay in one place. */
export const facts = {
  minGroup: MIN_GROUP,
  capacity: STUDIO_CAPACITY,
  minimum: MINIMUM_BOOKING,
  modelFee: MODEL_FEE,
  prices: PRICE_PER_PERSON,
};
