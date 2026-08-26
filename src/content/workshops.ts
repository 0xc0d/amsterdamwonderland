import type { Locale } from "../i18n";
import type { WorkshopSlug } from "../lib/pricing";
import { PRICE_PER_PERSON, MODEL_FEE } from "../lib/pricing";

const P = PRICE_PER_PERSON;

export type WorkshopImage =
  | "merchandise-totes"
  | "life-drawing"
  | "life-model-setup"
  | "mixed-media-ink"
  | "mixed-media-collage"
  | "w-paintings-floor"
  | "w-hooded-portrait"
  | "w-studio-session";

export interface Workshop {
  slug: WorkshopSlug;
  index: string;
  title: string;
  tagline: string;
  duration: string;
  format: string;
  intro: string;
  /**
   * <title> for this workshop's page, under about 55 characters so Google does
   * not truncate it. The artistic titles are deliberately not search phrases
   * ("Mixed media: artistic rollercoaster"), and pairing them with a location
   * suffix ran to 66 characters. These say the searchable thing instead, and
   * the artistic title still carries the page as its <h1>.
   */
  metaTitle: string;
  /**
   * Meta description for this workshop's page, 150 to 160 characters.
   * The page used to pass `intro` here, which runs to 330 characters on the
   * merch workshop, so Google truncated it mid-sentence in the result. Each
   * one leads with what the workshop is, names Amsterdam, and ends with the
   * price, because a price in the snippet lifts click-through on a
   * commercial query.
   */
  metaDescription: string;
  body: string[];
  outcomes: string[];
  notes?: string[];
  /** Thumbnail on the index and home cards. Public-facing, so keep it safe for work. */
  image: WorkshopImage | null;
  /** Wide image at the top of the workshop's own page. Falls back to `image`. */
  heroImage?: WorkshopImage;
}

/**
 * PROVENANCE. The prose here is Marie & Mette's own, from two sources:
 *
 *   1. content-source/marie-mette-texts-2026-08-26.txt, the file Ali supplied.
 *      This is authoritative for titles, intros and body text.
 *   2. content-source/previous-workshops.ts.txt, the earlier site copy, kept
 *      wherever it adds something source 1 does not say and does not
 *      contradict it. Each of those is marked KEPT below.
 *
 * `duration` and `format` are ours: a company cannot book without them, and
 * neither source states them. Every `outcomes` bullet traces to a sentence in
 * source 1. No em dashes anywhere in the copy.
 */
const en: Workshop[] = [
  {
    slug: "merchandise",
    index: "01",
    title: "Make your own merch",
    metaTitle: "Make Your Own Merch Workshop in Amsterdam",
    tagline: "Get to the core of your workplace and capture it in one image.",
    duration: "2 to 3 hours",
    format: "Brainstorm, drawing, silk screen printing",
    image: "merchandise-totes",
    intro:
      "In this workshop co-workers are challenged to get to the core of their workplace and capture it in one image, that will be used to create custom merch on second hand textiles, like tote bags, shirts, jackets and anything made of fabric that the participants bring themselves!",
    metaDescription: `Make your own merch in Amsterdam: get to the core of your workplace, capture it in one image, and we silk screen it onto textiles you bring. From EUR ${P.merchandise} p.p.`,
    body: [
      // KEPT from the earlier copy: the warm-up, which source 1 does not describe.
      "We start loose. Fast drawing exercises knock out the fear of the blank page, then the group turns its attention to the thing it actually shares: the company. What does it look like? What animal is it? What does the office sound like at 15:00?",
      "The image can be anything: a bird, a sausage you usually eat for lunch at the company canteen, or a facial expression. In a short brainstorm session everybody shares their ideas about what the merch image can be. Then everybody goes on to make their own design, of which one is playfully chosen at the end, to be silk screened by us onto textiles that you have brought yourself!",
    ],
    outcomes: [
      "Your own design for the merch image",
      "One image, chosen by the whole group at the end",
      "That image silk screened by us onto the textiles you brought",
    ],
    notes: [
      "Bring your own textiles: tote bags, shirts, jackets, anything made of fabric. Second hand is perfect.",
      // KEPT from the earlier copy, narrowed to production beyond the session.
      "Printing onto the textiles you bring is part of the workshop. A larger production run afterwards is quoted separately.",
    ],
  },
  {
    slug: "life-drawing",
    index: "02",
    title: "(Nude) model drawing & painting",
    metaTitle: "Nude Model Drawing Workshop in Amsterdam",
    tagline: "The model can be as naked as you want.",
    duration: "Approx. 2 hours",
    format: "Artist led, with a live model",
    // Ali's pick (DSCF2458crop.JPG). On the card as well as the page hero.
    image: "life-model-setup",
    intro:
      "In a series of exercises we warm up to explore different positions and drawing techniques. Participants work together by continuing each others works, loosening up with a very playful approach. In the last hour everybody works on their own drawing or painting, that can be taken home as a beautiful souvenir of the day.",
    metaDescription: `(Nude) model drawing and painting in Amsterdam, artist led with a live model. No experience needed. EUR ${P["life-drawing"]} p.p. plus a EUR ${MODEL_FEE} model fee per session.`,
    body: [
      // KEPT from the earlier copy: both paragraphs, em dash replaced with a colon.
      "We build from thirty-second gesture poses into longer studies, changing material and constraint as we go: non-dominant hand, one continuous line, drawing only the shadow. The exercises are designed so that experience stops being an advantage after about ten minutes.",
      "It is concentrated, slightly nerve-racking and unusually good for a team: everyone is a beginner at the same thing, at the same time.",
    ],
    outcomes: [
      "Your own drawing or painting from the last hour, to take home",
      "Work you made together, by drawing on into each other's sheets",
      "A run through different positions and drawing techniques",
    ],
    notes: [
      "How much the model wears is up to you. Tell us what suits the group and we arrange it.",
      `The EUR ${MODEL_FEE} model fee is a fixed cost per session, added on top of the per-person price.`,
    ],
  },
  {
    slug: "mixed-media",
    index: "03",
    title: "Mixed media: artistic rollercoaster",
    metaTitle: "Mixed Media Art Workshop in Amsterdam",
    tagline: "Thrown into the deep, and challenged to surrender to the material.",
    duration: "2 to 3 hours",
    format: "Collage, ink, comté and charcoal",
    image: "mixed-media-ink",
    intro:
      "This is a real artistic workshop, where we will draw inspiration from different artists, to take everybody through a journey of creative expression!",
    metaDescription: `A mixed media art workshop in Amsterdam: collage, ink and charcoal in two to three hours. Thrown into the deep, no experience needed. From EUR ${P["mixed-media"]} p.p.`,
    body: [
      // KEPT from the earlier copy: the two artists, whom source 1 leaves unnamed.
      "The artists we take our energy from include Joyce Pensato and Marlene Dumas, as a way of working rather than as something to copy.",
      "You'll be thrown into the deep and challenged to surrender to the material. Along the way, you'll learn to navigate the tension between chance and control. In this workshop, the result is not important. It makes space for spontaneous conversation, humour and experiment!",
      "We guide you through an artistic process using a variety of techniques. We begin with collage, then move on to ink to create emotional and psychological portraits, and finally work with comté and charcoal, allowing for a more expressive and uninhibited approach. We make a lot of works in a short period of time, so that you can really develop your dynamic with the material in a short time. It will be both active and relaxing, and surely a lot of fun!",
      "You'll loosen up all your creative muscles and, hopefully, leave with fresh impressions, new ideas, and renewed energy.",
    ],
    outcomes: [
      "A lot of works, made in a short time, in collage, ink and charcoal",
      "A feel for the tension between chance and control",
      "Fresh impressions, new ideas and renewed energy",
    ],
  },
  {
    slug: "custom",
    index: "04",
    title: "Custom workshop",
    metaTitle: "Custom Art Workshop in Amsterdam",
    tagline: "Your wish, our command!",
    duration: "Flexible",
    format: "Designed with you",
    image: "w-hooded-portrait",
    heroImage: "w-paintings-floor",
    intro:
      "For teambuilding, company outings, get-togethers, friend group activities and bachelor parties... Or any other occasion you can think of. We design the session around your occasion, your space and the group you actually have.",
    metaDescription:
      "A custom art workshop in Amsterdam, built around your occasion: teambuilding, a company outing, a bachelor party. In our atelier or at your own location.",
    body: [
      // KEPT from the earlier copy at Ali's request. Source 1 gives only the tagline.
      "Tell us the reason, the room, the number of people and the mood you are after. We come back with a proposal: materials, structure, timing, and what everybody takes home.",
      "Custom sessions can combine elements from our other workshops, work with your own visual identity, or start from something entirely specific to you.",
    ],
    outcomes: [
      "A workshop written for your occasion",
      "Materials and structure tailored to your space",
      "Optional print or merchandise outcome",
    ],
  },
];

/** DUTCH. Marie & Mette's own Dutch, from the same two sources as the English. */
const nl: Workshop[] = [
  {
    slug: "merchandise",
    index: "01",
    title: "Maak je eigen merch",
    metaTitle: "Merch-workshop in Amsterdam: maak je eigen merch",
    tagline: "Kom tot de kern van jullie werkplek en vang die in één beeld.",
    duration: "2 tot 3 uur",
    format: "Brainstorm, tekenen, zeefdruk",
    image: "merchandise-totes",
    intro:
      "In deze workshop worden collega's uitgedaagd om tot de kern van hun werkplek te komen en die te vangen in een beeld. Dit beeld wordt gebruikt om zelfgemaakte merch te creëren op tweedehands textiel, zoals linnen tassen, shirts, jasjes, en al het andere van stof dat deelnemers meenemen!",
    metaDescription: `Maak je eigen merch in Amsterdam: vang de kern van jullie werkplek in één beeld, en wij zeefdrukken het op textiel dat jullie meenemen. Vanaf EUR ${P.merchandise} p.p.`,
    body: [
      "We beginnen los. Snelle tekenoefeningen halen de angst voor het lege vel eruit, en dan richt de groep zich op wat ze echt delen: het bedrijf. Hoe ziet het eruit? Welk dier is het? Hoe klinkt het kantoor om 15:00?",
      "Het beeld kan alles zijn: een vogel, een worst die je als lunch in de bedrijfskantine kunt bestellen, of een gezichtsuitdrukking die bij jullie bedrijf past... In een korte brainstormsessie deelt iedereen zijn ideeën over wat dit beeld kan zijn. Daarna maakt elke deelnemer zijn eigen ontwerp, waarvan er aan het einde met speelse democratische verkiezing een wordt gekozen, die met zeefdruk zal worden geprint op het textiel dat jullie hebben meegenomen!",
    ],
    outcomes: [
      "Je eigen ontwerp voor het merch-beeld",
      "Eén beeld, aan het einde door de hele groep gekozen",
      "Dat beeld door ons gezeefdrukt op het textiel dat je hebt meegenomen",
    ],
    notes: [
      "Neem je eigen textiel mee: linnen tassen, shirts, jasjes, alles van stof. Tweedehands is perfect.",
      "Het printen op het textiel dat je meeneemt hoort bij de workshop. Een grotere oplage daarna rekenen we apart.",
    ],
  },
  {
    slug: "life-drawing",
    index: "02",
    title: "(Naakt) model tekenen & schilderen",
    metaTitle: "Modeltekenen workshop in Amsterdam",
    tagline: "Het model is zo naakt als jullie willen.",
    duration: "Ongeveer 2 uur",
    format: "Gegeven door een kunstenaar, met levend model",
    // Ali's pick (DSCF2458crop.JPG). On the card as well as the page hero.
    image: "life-model-setup",
    intro:
      "In een serie oefeningen warmen we op om verschillende posities en tekentechnieken uit te proberen. De deelnemers werken samen door steeds in elkaars tekeningen verder te werken, loskomend met een speelse aanpak. In het laatste uur werkt iedereen aan zijn eigen tekening of schilderij, die kunnen worden meegenomen als mooi aandenken aan deze dag!",
    metaDescription: `(Naakt) model tekenen en schilderen in Amsterdam, met levend model en begeleiding van een kunstenaar. Geen ervaring nodig. EUR ${P["life-drawing"]} p.p. plus EUR ${MODEL_FEE} model.`,
    body: [
      "We bouwen op van poses van dertig seconden naar langere studies, en wisselen onderweg van materiaal en beperking: je andere hand, één doorlopende lijn, alleen de schaduw tekenen. De oefeningen zijn zo gemaakt dat ervaring na een kwartier geen voordeel meer is.",
      "Het is concentreren, een beetje spannend, en opvallend goed voor een team: iedereen is beginner in hetzelfde, op hetzelfde moment.",
    ],
    outcomes: [
      "Je eigen tekening of schilderij uit het laatste uur, om mee te nemen",
      "Werk dat jullie samen maakten, door in elkaars tekeningen verder te gaan",
      "Een rondgang langs verschillende posities en tekentechnieken",
    ],
    notes: [
      "Hoeveel het model aanheeft, bepalen jullie. Zeg wat bij de groep past en wij regelen het.",
      `De vergoeding voor het model van EUR ${MODEL_FEE} is een vast bedrag per sessie, boven op de prijs per persoon.`,
    ],
  },
  {
    slug: "mixed-media",
    index: "03",
    title: "Mixed media: artistieke rollercoaster",
    metaTitle: "Mixed media kunstworkshop in Amsterdam",
    tagline: "In het diepe gegooid, uitgedaagd om je over te geven aan het materiaal.",
    duration: "2 tot 3 uur",
    format: "Collage, inkt, houtskool",
    image: "mixed-media-ink",
    intro:
      "Dit is een echte kunstworkshop, waarin we inspiratie halen uit verschillende kunstenaars, zodat iedereen wordt meegenomen op een creatieve reis!",
    metaDescription: `Een mixed media kunstworkshop in Amsterdam: collage, inkt en houtskool in twee tot drie uur. Geen ervaring nodig. Vanaf EUR ${P["mixed-media"]} p.p. excl. btw.`,
    body: [
      "De kunstenaars waar we onze energie uit halen zijn onder anderen Joyce Pensato en Marlene Dumas, als manier van werken en niet om na te doen.",
      "Je wordt in het diepe gegooid en uitgedaagd om je over te geven aan het materiaal. Terwijl je bezig bent, leer je te navigeren tussen toeval en controle. Tijdens deze workshop is het resultaat niet belangrijk. Er is ruimte voor spontane conversatie, humor en experiment.",
      "We leiden je door een artistiek proces waarbij we verschillende technieken gebruiken. We beginnen met collage, daarna gaan we verder met inkt om emotionele en psychologische portretten te maken, en uiteindelijk gaan we aan de slag met houtskool, voor een expressievere aanpak! We maken heel veel verschillende tekeningen in een heel korte tijd. Deze workshop is activerend en tegelijk ontspannend! Bovendien leer je ondertussen over kunstgeschiedenis!",
      "Iedereen gooit zijn creatieve spieren los, en je ziet elkaar van de andere kant. Jullie vertrekken met nieuwe ideeën, indrukken en nieuwe energie!",
    ],
    outcomes: [
      "Heel veel werken, in een korte tijd gemaakt, in collage, inkt en houtskool",
      "Gevoel voor de spanning tussen toeval en controle",
      "Nieuwe ideeën, indrukken en nieuwe energie",
      "En onderweg leer je over kunstgeschiedenis",
    ],
  },
  {
    slug: "custom",
    index: "04",
    title: "Workshop op maat",
    metaTitle: "Kunstworkshop op maat in Amsterdam",
    tagline: "U vraagt, wij draaien",
    duration: "Flexibel",
    format: "Samen met jullie bedacht",
    image: "w-hooded-portrait",
    heroImage: "w-paintings-floor",
    intro:
      "Voor teambuilding, bedrijfsuitjes, samenkomsten met collega's, vriendenactiviteiten, vrijgezellenfeestjes... en elke andere gelegenheid die je kunt bedenken. We ontwerpen de sessie rond jullie gelegenheid, jullie ruimte en de groep die je echt hebt.",
    metaDescription:
      "Een kunstworkshop op maat in Amsterdam, rond jullie gelegenheid: teambuilding, bedrijfsuitje of vrijgezellenfeest. In ons atelier of op jullie eigen locatie.",
    body: [
      "Vertel ons de reden, de ruimte, het aantal mensen en de sfeer die je zoekt. Wij komen terug met een voorstel: materiaal, opbouw, timing, en wat iedereen meeneemt naar huis.",
      "Sessies op maat kunnen onderdelen uit onze andere workshops combineren, met jullie eigen huisstijl werken, of beginnen bij iets dat helemaal specifiek van jullie is.",
    ],
    outcomes: [
      "Een workshop geschreven voor jullie gelegenheid",
      "Materiaal en opbouw afgestemd op jullie ruimte",
      "Eventueel een print- of merchandise-resultaat",
    ],
  },
];

const byLocale: Record<Locale, Workshop[]> = { en, nl };

export function getWorkshops(locale: Locale): Workshop[] {
  return byLocale[locale] ?? byLocale.en;
}

export function getWorkshop(locale: Locale, slug: string): Workshop | undefined {
  return getWorkshops(locale).find((w) => w.slug === slug);
}

export function priceLabel(locale: Locale, slug: WorkshopSlug): string {
  // Custom workshops are quoted per occasion, so there is no honest number.
  if (slug === "custom") return locale === "nl" ? "Prijs op aanvraag" : "Price on request";
  const p = PRICE_PER_PERSON[slug];
  const from = slug === "life-drawing" ? "" : locale === "nl" ? "vanaf " : "from ";
  const suffix = locale === "nl" ? "p.p. excl. btw" : "p.p. excl. VAT";
  return `${from}€${p} ${suffix}`;
}
