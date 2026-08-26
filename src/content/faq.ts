/**
 * FAQ content, English and Dutch.
 *
 * WHY THIS EXISTS. Two reasons, in order of size.
 *
 *   1. The site had almost no text that matched how people actually search.
 *      The home page ran 472 words with "art workshop" appearing exactly once,
 *      and the gallery page had 30 words against 71 photographs. These answers
 *      are the phrasings buyers type: "do I need to be able to draw",
 *      "how many people fit", "wat kost een bedrijfsuitje in Amsterdam".
 *   2. They double as FAQPage structured data, built from this same array in
 *      src/lib/seo.ts, so the visible text and the markup can never disagree.
 *      Note that Google restricted FAQ rich results to government and health
 *      sites in 2023, so do not expect an expanded snippet from the markup
 *      alone. The value is the words on the page.
 *
 * PROVENANCE. Every answer restates a fact the site already carries, from
 * src/i18n/*.ts, src/content/workshops.ts or src/lib/pricing.ts. Nothing here
 * is new information about the business. Numbers are interpolated from
 * pricing.ts rather than typed, so they cannot drift. If a question needs a
 * fact we do not have (parking, wheelchair access, cancellation terms, how far
 * ahead to book, whether they travel outside Amsterdam), it is NOT in this
 * file. Those are listed in PROJECT-NOTES.md for Marie & Mette to answer.
 *
 * The Dutch set deliberately uses the words Dutch corporate bookers search
 * ("bedrijfsuitje", "teambuilding", "creatieve workshop") rather than a
 * word-for-word translation of the English set.
 *
 * No em dashes.
 */
import type { Locale } from "../i18n";
import type { FaqItem } from "../lib/seo";
import type { WorkshopSlug } from "../lib/pricing";
import { MIN_GROUP, MINIMUM_BOOKING, MODEL_FEE, PRICE_PER_PERSON, STUDIO_CAPACITY, STUDIO_RENT } from "../lib/pricing";

const LOW = Math.min(...Object.values(PRICE_PER_PERSON));
const HIGH = Math.max(...Object.values(PRICE_PER_PERSON));

const generalEn: FaqItem[] = [
  {
    q: "Where in Amsterdam are the workshops held?",
    a: `In our own artist studio in the famous Amsterdam Red Light District, or at your office or location. From ${MIN_GROUP} to ${STUDIO_CAPACITY} people fit in the atelier. Above ${STUDIO_CAPACITY} we come to you, for as many people as you like.`,
  },
  {
    q: "Do I need to be able to draw?",
    a: "No experience or skill required. We take care of the materials and provide a structure to help you go through an artistic process. You only have to bring yourself, and you go home with something you made.",
  },
  {
    q: "How many people can join an art workshop?",
    a: `${MIN_GROUP} to ${STUDIO_CAPACITY} people in our atelier. For a larger group we bring the workshop to your office or location, where there is no upper limit.`,
  },
  {
    q: "What does an art workshop in Amsterdam cost?",
    a: `Between €${LOW} and €${HIGH} per person excl. VAT depending on the workshop, with a minimum booking of €${MINIMUM_BOOKING} excl. VAT. Studio rent is €${STUDIO_RENT} and the model drawing session adds a fixed €${MODEL_FEE} model fee. The custom workshop is quoted per occasion.`,
  },
  {
    q: "How long does a workshop take?",
    a: "Two to three hours for the merch and mixed media workshops, and about two hours for the model drawing session. A custom workshop runs as long as your occasion needs.",
  },
  {
    q: "Are the materials included?",
    a: "Yes, all materials are included. Healthy slow juice is standard as well, with or without an alcoholic twist.",
  },
  {
    q: "Can you arrange food and drinks?",
    a: "Breakfast, lunch, dinner, drinks or bites can all be taken care of if discussed, and we can arrange decoration too. Everything can be discussed.",
  },
  {
    q: "Is this suitable for team building or a company outing?",
    a: "That is most of what we do. Teambuilding, company outings, get-togethers, friend group activities and bachelor parties, or any other occasion you can think of. The atmosphere can be adjusted for every occasion.",
  },
  {
    q: "Which languages do you speak?",
    a: "Dutch, English and some French.",
  },
  {
    q: "How do we book a workshop?",
    a: "Call or WhatsApp us, or send an email. Tell us the occasion, roughly how many people, and when. We come back with a proposal.",
  },
];

const generalNl: FaqItem[] = [
  {
    q: "Waar in Amsterdam worden de workshops gegeven?",
    a: `In ons eigen atelier op de beroemde Amsterdamse Wallen, of op jullie kantoor of locatie. In het atelier passen ${MIN_GROUP} tot ${STUDIO_CAPACITY} personen. Boven de ${STUDIO_CAPACITY} komen wij naar jullie toe, voor zoveel mensen als je wilt.`,
  },
  {
    q: "Moet ik kunnen tekenen?",
    a: "Geen ervaring of talent nodig. Wij zorgen voor de materialen en bieden een structuur die je door een artistiek proces heen helpt. Je hoeft alleen jezelf mee te nemen, en gaat naar huis met iets wat je zelf hebt gemaakt.",
  },
  {
    q: "Is een kunstworkshop een goed bedrijfsuitje in Amsterdam?",
    a: "Dat is het grootste deel van wat wij doen. Teambuilding, bedrijfsuitjes, samenkomsten met collega's, vriendenactiviteiten en vrijgezellenfeestjes, en elke andere gelegenheid die je kunt bedenken. De sfeer kan worden aangepast aan elke gelegenheid.",
  },
  {
    q: "Voor hoeveel personen is een workshop?",
    a: `${MIN_GROUP} tot ${STUDIO_CAPACITY} personen in ons atelier. Bij een grotere groep brengen wij de workshop naar jullie kantoor of locatie, waar geen bovengrens geldt.`,
  },
  {
    q: "Wat kost een kunstworkshop in Amsterdam?",
    a: `Tussen €${LOW} en €${HIGH} per persoon excl. btw, afhankelijk van de workshop, met een minimale boeking van €${MINIMUM_BOOKING} excl. btw. Atelierhuur is €${STUDIO_RENT} en bij de modeltekensessie komt een vaste vergoeding van €${MODEL_FEE} voor het model erbij. De workshop op maat wordt per gelegenheid aangeboden.`,
  },
  {
    q: "Hoe lang duurt een workshop?",
    a: "Twee tot drie uur voor de merch- en mixed media-workshops, en ongeveer twee uur voor de modeltekensessie. Een workshop op maat duurt zo lang als jullie gelegenheid vraagt.",
  },
  {
    q: "Is het materiaal inbegrepen?",
    a: "Ja, alle materialen zijn inbegrepen. Verse, gezonde slow juice hoort er standaard bij, met of zonder alcoholische twist.",
  },
  {
    q: "Kunnen jullie eten en drinken verzorgen?",
    a: "Ontbijt, lunch, avondeten, drankjes en hapjes kunnen allemaal worden verzorgd op aanvraag, en decoratie regelen wij ook. Alles is te bespreken.",
  },
  {
    q: "Komen jullie ook naar ons kantoor?",
    a: `Ja. Vanaf ${STUDIO_CAPACITY} personen komen wij standaard naar jullie kantoor of locatie, en daar geldt geen maximum aantal deelnemers.`,
  },
  {
    q: "Welke talen spreken jullie?",
    a: "Nederlands, Engels en een beetje Frans.",
  },
  {
    q: "Hoe boeken we een workshop?",
    a: "Bel of WhatsApp ons, of stuur een mail. Vertel ons de gelegenheid, ongeveer hoeveel mensen en wanneer. Wij komen terug met een voorstel.",
  },
];

const perWorkshopEn: Record<WorkshopSlug, FaqItem[]> = {
  merchandise: [
    {
      q: "What do we take home from the merch workshop?",
      a: "Your own design for the merch image, plus the one image the whole group chooses at the end, silk screened by us onto the textiles you brought.",
    },
    {
      q: "What should we bring to the merch workshop?",
      a: "Your own textiles: tote bags, shirts, jackets, anything made of fabric. Second hand is perfect.",
    },
    {
      q: "Can you print a larger run afterwards?",
      a: "Printing onto the textiles you bring is part of the workshop. A larger production run afterwards is quoted separately.",
    },
  ],
  "life-drawing": [
    {
      q: "Does the model have to be nude?",
      a: "How much the model wears is up to you. Tell us what suits the group and we arrange it.",
    },
    {
      q: "Is the model fee on top of the price per person?",
      a: `Yes. The €${MODEL_FEE} model fee is a fixed cost per session, added on top of the €${PRICE_PER_PERSON["life-drawing"]} per person excl. VAT.`,
    },
    {
      q: "Do I need drawing experience for a life drawing session?",
      a: "No. We build from thirty-second gesture poses into longer studies, changing material and constraint as we go. The exercises are designed so that experience stops being an advantage after about ten minutes.",
    },
  ],
  "mixed-media": [
    {
      q: "Which techniques does the mixed media workshop use?",
      a: "We begin with collage, then move on to ink to make emotional and psychological portraits, and finally work with comté and charcoal for a more expressive and uninhibited approach.",
    },
    {
      q: "Do we have to produce a finished artwork?",
      a: "No. In this workshop the result is not important. It makes space for spontaneous conversation, humour and experiment, and you make a lot of works in a short time.",
    },
    {
      q: "How long is the mixed media workshop?",
      a: `Two to three hours, at €${PRICE_PER_PERSON["mixed-media"]} per person excl. VAT.`,
    },
  ],
  custom: [
    {
      q: "How does a custom workshop work?",
      a: "Tell us the reason, the room, the number of people and the mood you are after. We come back with a proposal: materials, structure, timing, and what everybody takes home.",
    },
    {
      q: "What does a custom workshop cost?",
      a: "It is quoted per occasion, because it is designed around your occasion, your space and the group you actually have. Tell us what you have in mind.",
    },
    {
      q: "Can a custom workshop use our own visual identity?",
      a: "Yes. Custom sessions can combine elements from our other workshops, work with your own visual identity, or start from something entirely specific to you.",
    },
  ],
};

const perWorkshopNl: Record<WorkshopSlug, FaqItem[]> = {
  merchandise: [
    {
      q: "Wat nemen we mee naar huis uit de merch-workshop?",
      a: "Je eigen ontwerp voor het merch-beeld, plus het ene beeld dat de hele groep aan het einde kiest, door ons gezeefdrukt op het textiel dat jullie hebben meegenomen.",
    },
    {
      q: "Wat moeten we meenemen naar de merch-workshop?",
      a: "Je eigen textiel: linnen tassen, shirts, jasjes, alles van stof. Tweedehands is perfect.",
    },
    {
      q: "Kunnen jullie daarna een grotere oplage printen?",
      a: "Het printen op het textiel dat je meeneemt hoort bij de workshop. Een grotere oplage daarna rekenen we apart.",
    },
  ],
  "life-drawing": [
    {
      q: "Moet het model naakt zijn?",
      a: "Hoeveel het model aanheeft, bepalen jullie. Zeg wat bij de groep past en wij regelen het.",
    },
    {
      q: "Komt de vergoeding voor het model boven op de prijs per persoon?",
      a: `Ja. De vergoeding van €${MODEL_FEE} is een vast bedrag per sessie, boven op de €${PRICE_PER_PERSON["life-drawing"]} per persoon excl. btw.`,
    },
    {
      q: "Heb ik tekenervaring nodig voor een modeltekensessie?",
      a: "Nee. We bouwen op van poses van dertig seconden naar langere studies, en wisselen onderweg van materiaal en beperking. De oefeningen zijn zo gemaakt dat ervaring na een kwartier geen voordeel meer is.",
    },
  ],
  "mixed-media": [
    {
      q: "Welke technieken gebruikt de mixed media-workshop?",
      a: "We beginnen met collage, daarna gaan we verder met inkt om emotionele en psychologische portretten te maken, en uiteindelijk werken we met houtskool voor een expressievere aanpak.",
    },
    {
      q: "Moeten we een af kunstwerk maken?",
      a: "Nee. Tijdens deze workshop is het resultaat niet belangrijk. Er is ruimte voor spontane conversatie, humor en experiment, en je maakt heel veel werken in korte tijd.",
    },
    {
      q: "Hoe lang duurt de mixed media-workshop?",
      a: `Twee tot drie uur, voor €${PRICE_PER_PERSON["mixed-media"]} per persoon excl. btw.`,
    },
  ],
  custom: [
    {
      q: "Hoe werkt een workshop op maat?",
      a: "Vertel ons de reden, de ruimte, het aantal mensen en de sfeer die je zoekt. Wij komen terug met een voorstel: materiaal, opbouw, timing, en wat iedereen meeneemt naar huis.",
    },
    {
      q: "Wat kost een workshop op maat?",
      a: "Die wordt per gelegenheid aangeboden, omdat hij wordt ontworpen rond jullie gelegenheid, jullie ruimte en de groep die je echt hebt. Vertel ons wat je in gedachten hebt.",
    },
    {
      q: "Kan een workshop op maat onze eigen huisstijl gebruiken?",
      a: "Ja. Sessies op maat kunnen onderdelen uit onze andere workshops combineren, met jullie eigen huisstijl werken, of beginnen bij iets dat helemaal specifiek van jullie is.",
    },
  ],
};

export function generalFaq(locale: Locale): FaqItem[] {
  return locale === "nl" ? generalNl : generalEn;
}

/**
 * The subset shown on the home page, which then links to /faq for the rest.
 *
 * Deliberately NOT the full set. Repeating all ten answers on both the home
 * page and /faq would put near-identical blocks on two URLs, and Google then
 * has to choose which one to rank. Five here keeps the home page substantial
 * while leaving /faq as the only place that holds everything.
 *
 * Chosen by what a first-time visitor asks before anything else: where, whether
 * they need to be able to draw, what it costs, whether it suits a team, and how
 * to book. Indices into the arrays above rather than copies, so an edit to an
 * answer cannot apply to one page and miss the other.
 */
const HOME_PICKS_EN = [0, 1, 3, 7, 9];
const HOME_PICKS_NL = [0, 1, 4, 2, 10];

export function homeFaq(locale: Locale): FaqItem[] {
  const [all, picks] =
    locale === "nl" ? [generalNl, HOME_PICKS_NL] : [generalEn, HOME_PICKS_EN];
  return picks.map((i) => all[i]).filter(Boolean);
}

/** Every question on the site, general first then grouped by workshop. */
export function allFaqSections(
  locale: Locale,
  workshopTitles: Record<WorkshopSlug, string>,
  generalHeading: string,
): { heading: string; items: FaqItem[] }[] {
  const slugs: WorkshopSlug[] = ["merchandise", "life-drawing", "mixed-media", "custom"];
  return [
    { heading: generalHeading, items: generalFaq(locale) },
    ...slugs.map((slug) => ({
      heading: workshopTitles[slug],
      items: workshopFaq(locale, slug),
    })),
  ];
}

export function workshopFaq(locale: Locale, slug: WorkshopSlug): FaqItem[] {
  return (locale === "nl" ? perWorkshopNl : perWorkshopEn)[slug] ?? [];
}
