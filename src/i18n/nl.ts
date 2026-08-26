/**
 * Dutch copy.
 *
 * The prose strings marked THEIRS are Marie & Mette's own Dutch, from
 * content-source/marie-mette-texts-2026-08-26.txt. Do not touch those.
 * The rest is still a draft of mine and needs Ali's eyes: UI labels, meta
 * descriptions, and the estimate/contact pages.
 * One correction to their Dutch: "poezie" -> "poëzie".
 * NO EM DASHES anywhere in user-visible copy.
 */
import { MINIMUM_BOOKING } from "../lib/pricing";
import type { Dict } from "./en";

export const nl: Dict = {
  locale: "nl",
  htmlLang: "nl",
  label: "Nederlands",

  nav: {
    workshops: "Workshops",
    gallery: "Galerie",
    about: "Over ons",
    estimate: "Prijzen",
    contact: "Contact",
    book: "Workshop boeken",
    menu: "Menu",
    close: "Sluiten",
  },

  brand: {
    name: "Wonderland Workshops",
    tagline: "Kunstworkshops in Amsterdam",
  },

  book: {
    title: "Boek een workshop",
    body: "Alles is te bespreken.",
    call: "Bel ons",
    whatsapp: "WhatsApp",
    email: "Mail ons",
    instagram: "Instagram",
    noPhoneNote: "Mailen is de snelste manier om ons te bereiken.",
  },

  home: {
    metaTitle: "Wonderland Workshops | Kunstworkshops in Amsterdam",
    metaDescription:
      "Wij geven kunstworkshops in Amsterdam voor bedrijven, teams en groepen. Twee Amsterdamse kunstenaars, ons atelier op de Wallen, alle materialen inbegrepen.",
    heroTitle: "Wonderland Workshops",

    // THEIRS, verbatim from the general text.
    heroLead:
      "Diepzinnige, artistieke en grappige workshops met een dromerige, ontspannen sfeer. Voor teambuilding, bedrijfsuitjes, samenkomsten met collega's, vriendenactiviteiten, vrijgezellenfeestjes... en elke andere gelegenheid die je kunt bedenken.",
    heroClaim: "Wij geven kunstworkshops in Amsterdam voor bedrijven, teams en groepen.",
    // THEIRS (the "Standaard inbegrepen" sentences), merged with the earlier facts.
    heroBody:
      "Je wordt uitgenodigd in de wereld van twee Amsterdamse kunstenaars: in ons atelier op de beroemde Amsterdamse Wallen, alle materialen inbegrepen. Standaard inbegrepen: vers, gezond slow juice (met of zonder alcoholische twist). Ontbijt, lunch, avondeten, drankjes en hapjes kunnen worden verzorgd op aanvraag, en decoratie regelen wij ook. Wij spreken Nederlands, Engels en een beetje Frans. Van 6 tot 12 personen in ons atelier, en voor zoveel mensen als je wilt op je kantoor of locatie. U vraagt, wij draaien.",

    ctaPrimary: "Bekijk de workshops",

    workshopsEyebrow: "De workshops",
    workshopsNote: `Minimale boeking €${MINIMUM_BOOKING} excl. btw.`,
    readMore: "Lees meer",

    introTitle: "Geen ervaring of talent nodig!",
    introA:
      "Wij zorgen voor de materialen. Wij bieden een structuur die je door een artistiek proces heen helpt. Je hoeft alleen jezelf mee te nemen, en gaat naar huis met iets wat je zelf hebt gemaakt!",
    introB:
      "Dit is een activiteit waarbij je elkaar op een nieuwe manier leert kennen; iedereen experimenteert en drukt zichzelf uit! Geen tijd om vast te lopen, wij helpen iedereen erdoorheen.",

    galleryEyebrow: "Galerie",
    galleryMore: "Bekijk de galerie",
  },

  workshopsPage: {
    metaTitle: "Workshops | Wonderland Workshops Amsterdam",
    metaDescription:
      "Maak je eigen merch, model tekenen, mixed media en workshops op maat voor bedrijven, teams en groepen in Amsterdam.",
    eyebrow: "Workshops",
    title: "De workshops",
    lead: "Van 6 tot 12 personen in ons atelier, en voor zoveel mensen als je wilt op je kantoor of locatie.",
    duration: "Duur",
    format: "Vorm",
    price: "Prijs",
    groupSize: "Groepsgrootte",
    takeaway: "Wat je meeneemt",
    goodToKnow: "Goed om te weten",
    allWorkshops: "Alle workshops",
    bookThis: "Boek deze workshop",
    estimateThis: "Bekijk de prijs",
    coreEyebrow: "Drie workshops",
    customEyebrow: "Of één op maat",
    // THEIRS, from the custom workshop section.
    customTitle: "U vraagt, wij draaien",
    customPriceNote: "Prijs per gelegenheid. Vertel ons wat je in gedachten hebt.",
    customLink: "De workshop op maat",
  },

  gallery: {
    metaTitle: "Galerie | Wonderland Workshops Amsterdam",
    metaDescription:
      "Foto's van onze kunstworkshops in Amsterdam: het atelier, de sessies en het werk dat erin gemaakt wordt.",
    eyebrow: "Galerie",
    title: "Galerie",
    lead: "Het atelier, de sessies, en wat mensen erin maken.",
    note: "",
  },

  about: {
    metaTitle: "Over ons | Wonderland Workshops Amsterdam",
    metaDescription:
      "Twee Amsterdamse kunstenaars die kunstworkshops geven vanuit een atelier op de Wallen.",
    eyebrow: "Wie zijn wij?",
    title: "Marie & Mette",
    lead: "Twee Amsterdamse kunstenaars. Wij geven elke workshop samen.",
    // THEIRS, verbatim. Only "poezie" corrected to "poëzie".
    bodyA:
      "Wij zijn Marie en Mette, twee oud-klasgenoten aan de Gerrit Rietveld Academie. We konden het meteen goed met elkaar vinden door onze gedeelde humor en (visuele) poëzie. In Wonderland Workshops verwelkomen we jullie in ons mooie atelier om een van onze inspirerende workshops te volgen. Kies tussen een eclectische mixed media / collage workshop om je handen vuil te maken; werk naar een concreet resultaat toe in onze merch workshop en kom tot de kern van wat je bedrijf betekent of leer beter observeren tijdens onze modeltekensessies (met of zonder kleren).",
    bodyB:
      "Onze workshops zijn beschikbaar voor bedrijven, vriendengroepen en individuen. De sfeer kan worden aangepast aan elke gelegenheid.",
    // KEPT from the earlier copy: the practical detail their bio does not state.
    bodyC:
      "Naast de activiteit zorgen wij voor gezonde sapjes, eten, snacks en zelfs decoratie. Alles is te bespreken.",
    languagesTitle: "Talen",
    languages: "Nederlands, Engels en een beetje Frans",
    whereTitle: "Waar",
    where: "De Wallen, Amsterdam",
    capacityTitle: "Groepsgrootte",
    capacity: "6 tot 12 in ons atelier · elk aantal op jouw locatie",
  },

  estimate: {
    metaTitle: "Prijzen | Wonderland Workshops Amsterdam",
    metaDescription:
      "Bereken de kosten van een kunstworkshop in Amsterdam: kies een workshop, groepsgrootte en locatie.",
    eyebrow: "Prijzen",
    title: "Wat kost het?",
    lead: "Kies een workshop en een groepsgrootte om de prijs te zien. Bel of mail ons daarna en wij maken het waar.",
    workshopLabel: "Workshop",
    participantsLabel: "Aantal personen",
    locationLabel: "Waar",
    atStudio: "Ons atelier in Amsterdam",
    atYours: "Jouw kantoor of locatie",
    perPerson: "Per persoon",
    people: "personen",
    subtotal: "Subtotaal",
    studioRentLabel: "Atelierhuur",
    minimumNote: `Minimale boeking van €${MINIMUM_BOOKING} toegepast`,
    modelFeeLabel: "Vergoeding model",
    exclVat: "Subtotaal excl. btw",
    vatLabel: "Btw 21%",
    inclVat: "Totaal incl. btw",
    capacityNote: "Meer dan 12 personen? Dan komen wij naar je kantoor of locatie.",
    disclaimer:
      "Alle prijzen zijn excl. 21% btw. Reizen buiten Amsterdam, merchandiseproductie en speciale materialen worden apart aangeboden.",
    sendCta: "Boek deze workshop",
  },

  contact: {
    metaTitle: "Contact | Wonderland Workshops Amsterdam",
    metaDescription:
      "Boek een kunstworkshop in Amsterdam. Bel, WhatsApp of mail ons. Wij spreken Nederlands, Engels en een beetje Frans.",
    eyebrow: "Contact",
    title: "Laten we iets maken",
    lead: "Vertel ons de gelegenheid, ongeveer hoeveel mensen en wanneer. Alles is te bespreken.",
    nameLabel: "Je naam",
    emailLabel: "E-mail",
    occasionLabel: "Wat is de gelegenheid?",
    peopleLabel: "Hoeveel personen?",
    dateLabel: "Ongeveer welke datum",
    messageLabel: "Nog iets wat we moeten weten?",
    submit: "Versturen",
    sending: "Versturen…",
    successTitle: "Bedankt, dat is bij ons aangekomen.",
    successBody: "We nemen zo snel mogelijk contact met je op.",
    errorBody: "Dat is niet verstuurd. Mail ons rechtstreeks.",
    orEmail: "Of mail ons rechtstreeks",
    emailAddress: "mariemettezakelijk@gmail.com",
    phoneLabel: "Telefoon",
    languagesLabel: "Talen",
    languagesValue: "Nederlands, Engels en een beetje Frans",
    basedLabel: "Gevestigd in",
    basedValue: "Amsterdam, Nederland",
    pricingLabel: "Prijzen",
    required: "verplicht",
  },

  footer: {
    blurb: "Kunstworkshops in Amsterdam voor bedrijven, teams en groepen.",
    workshops: "Workshops",
    studio: "Atelier",
    rights: "Alle rechten voorbehouden.",
  },
};
