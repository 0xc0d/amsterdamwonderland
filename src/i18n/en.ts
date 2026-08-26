/**
 * English copy.
 *
 * PROVENANCE RULE: prose here is Marie & Mette's own text. Two sources:
 *   1. content-source/marie-mette-texts-2026-08-26.txt (authoritative)
 *   2. content-source/previous-en.ts.txt, the earlier copy, kept wherever it
 *      says something source 1 does not and does not contradict it.
 * Do not "improve" their voice. The only edits to their words are the
 * misspelling "experements" -> "experiments" and plain "..." for ellipses.
 * Strings that are pure UI (button labels, field names) are ours by necessity.
 * NO EM DASHES anywhere in user-visible copy.
 */
import { MINIMUM_BOOKING } from "../lib/pricing";

export const en = {
  locale: "en",
  htmlLang: "en",
  label: "English",

  nav: {
    workshops: "Workshops",
    gallery: "Gallery",
    about: "About",
    estimate: "Prices",
    contact: "Contact",
    book: "Book a workshop",
    menu: "Menu",
    close: "Close",
  },

  brand: {
    name: "Wonderland Workshops",
    tagline: "Art workshops in Amsterdam",
  },

  /** Booking rail, repeated wherever someone might decide to get in touch. */
  book: {
    title: "Book a workshop",
    body: "Everything can be discussed.",
    call: "Call us",
    whatsapp: "WhatsApp",
    email: "Email us",
    instagram: "Instagram",
    noPhoneNote: "Email is the fastest way to reach us.",
  },

  home: {
    metaTitle: "Wonderland Workshops | Art Workshops in Amsterdam",
    metaDescription:
      "We run art workshops in Amsterdam for companies, teams and groups. Two Amsterdam based artists, our studio in the Red Light District, all materials included.",
    heroTitle: "Wonderland Workshops",

    // Marie & Mette's own words, from the general text. Verbatim.
    heroLead:
      "Deep, artistic and funny workshops with a dreamy, relaxed atmosphere. For teambuilding, company outings, get-togethers, friend group activities and bachelor parties... Or any other occasion you can think of.",
    heroClaim: "We run art workshops in Amsterdam for companies, teams and groups.",
    // Their new general text, merged with the operational facts from the earlier copy.
    heroBody:
      "Get invited into the world of two Amsterdam based artists: in our artist studio in the famous Amsterdam Red Light District, all materials included. Standard included: healthy slow juice (with or without alcoholic twist). Breakfast, lunch, dinner, drinks or bites can be taken care of if discussed, and we can arrange decoration too. We speak Dutch, English and some French. From 6 to 12 people in our atelier, for as many people as you like at your office or location. You name it, we make it happen.",

    ctaPrimary: "See the workshops",

    workshopsEyebrow: "The workshops",
    workshopsNote: `Minimum workshop booking €${MINIMUM_BOOKING} excl. VAT.`,
    readMore: "Read more",

    // Marie & Mette's own words. Verbatim, bar one misspelling.
    introTitle: "No experience or skill required!",
    introA:
      "We take care of the materials. We provide a structure to help you go through an artistic process. You only have to bring yourself, going home with something you made!",
    introB:
      "This is an activity where you get to know each other in a new way; everybody experiments and expresses themselves! No time to get stuck, we will get everyone through.",

    galleryEyebrow: "Gallery",
    galleryMore: "See the gallery",
  },

  workshopsPage: {
    metaTitle: "Workshops | Wonderland Workshops Amsterdam",
    metaDescription:
      "Make your own merch, model drawing, mixed media and custom art workshops for companies, teams and groups in Amsterdam.",
    eyebrow: "Workshops",
    title: "The workshops",
    lead: "From 6 to 12 people in our atelier, for as many people as you like at your office or location.",
    duration: "Duration",
    format: "Format",
    price: "Price",
    groupSize: "Group size",
    takeaway: "What you take home",
    goodToKnow: "Good to know",
    allWorkshops: "All workshops",
    bookThis: "Book this workshop",
    estimateThis: "Check the price",
    /* Structure labels for the index: three set workshops, then one built to order. */
    coreEyebrow: "Three workshops",
    customEyebrow: "Or one built for you",
    // Marie & Mette's own words, from the custom workshop section.
    customTitle: "Your wish, our command!",
    customPriceNote: "Quoted per occasion. Tell us what you have in mind.",
    customLink: "The custom workshop",
  },

  gallery: {
    metaTitle: "Gallery | Wonderland Workshops Amsterdam",
    metaDescription:
      "Photographs from our art workshops in Amsterdam: the atelier, the sessions, and the work made in them.",
    eyebrow: "Gallery",
    title: "Gallery",
    lead: "The atelier, the sessions, and what people make in them.",
    note: "",
  },

  about: {
    metaTitle: "About | Wonderland Workshops Amsterdam",
    metaDescription:
      "Two Amsterdam based artists running art workshops from a studio in the Red Light District.",
    eyebrow: "Who are we?",
    title: "Marie & Mette",
    lead: "Two Amsterdam based artists. We run every workshop together.",
    // Their own bios, verbatim from the general text file.
    bodyA:
      "We are Marie and Mette. We met while studying at the Gerrit Rietveld Academy and immediately got along through our sense of humor and poetry. We welcome you to our beautiful atelier to participate in one of our inspirational workshops. Choose between eclectic mixed media / collage workshop, to get your hands dirty; work towards a concrete result in the merch workshop to get to the core of what your company means or learn to observe better during a collaborative life drawing session.",
    bodyB:
      "Our workshops are available for companies, friend groups and individuals. The atmosphere can be adjusted for every occasion.",
    // KEPT from the earlier copy: the practical detail their bio does not state.
    bodyC:
      "Apart from the activity we provide healthy slow juice, food, snacks and even decoration. Everything can be discussed.",
    languagesTitle: "Languages",
    languages: "Dutch, English and some French",
    whereTitle: "Where",
    where: "Amsterdam Red Light District",
    capacityTitle: "Group size",
    capacity: "6 to 12 in our atelier · any number at your location",
  },

  estimate: {
    metaTitle: "Prices | Wonderland Workshops Amsterdam",
    metaDescription:
      "Work out the cost of an art workshop in Amsterdam: pick a workshop, group size and location.",
    eyebrow: "Prices",
    title: "What does it cost?",
    lead: "Pick a workshop and a group size to see the price. Then call or email us and we make it happen.",
    workshopLabel: "Workshop",
    participantsLabel: "Number of people",
    locationLabel: "Where",
    atStudio: "Our atelier in Amsterdam",
    atYours: "Your office or location",
    perPerson: "Per person",
    people: "people",
    subtotal: "Subtotal",
    studioRentLabel: "Studio rent",
    minimumNote: `Minimum booking of €${MINIMUM_BOOKING} applied`,
    modelFeeLabel: "Live model fee",
    exclVat: "Subtotal excl. VAT",
    vatLabel: "VAT 21%",
    inclVat: "Total incl. VAT",
    capacityNote: "More than 12 people? Then we come to your office or location.",
    disclaimer:
      "All prices excl. 21% VAT. Travel outside Amsterdam, merchandise production and special materials are quoted separately.",
    sendCta: "Book this workshop",
  },

  contact: {
    metaTitle: "Contact | Wonderland Workshops Amsterdam",
    metaDescription:
      "Book an art workshop in Amsterdam. Call, WhatsApp or email us. We speak Dutch, English and some French.",
    eyebrow: "Contact",
    title: "Let's make something",
    lead: "Tell us the occasion, roughly how many people and when. Everything can be discussed.",
    nameLabel: "Your name",
    emailLabel: "Email",
    occasionLabel: "What is the occasion?",
    peopleLabel: "How many people?",
    dateLabel: "Rough date",
    messageLabel: "Anything else we should know?",
    submit: "Send",
    sending: "Sending…",
    successTitle: "Thank you, that reached us.",
    successBody: "We will get back to you as soon as we can.",
    errorBody: "That did not send. Please email us directly instead.",
    orEmail: "Or email us directly",
    emailAddress: "mariemettezakelijk@gmail.com",
    phoneLabel: "Phone",
    languagesLabel: "Languages",
    languagesValue: "Dutch, English and some French",
    basedLabel: "Based in",
    basedValue: "Amsterdam, the Netherlands",
    pricingLabel: "Pricing",
    required: "required",
  },

  footer: {
    blurb: "Art workshops in Amsterdam for companies, teams and groups.",
    workshops: "Workshops",
    studio: "Studio",
    rights: "All rights reserved.",
  },
};

export type Dict = typeof en;
