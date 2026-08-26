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
    home: "Home",
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
    /* Keyword eerst, merk daarna. Zie de toelichting in en.ts. */
    metaTitle: "Kunstworkshops in Amsterdam | Bedrijfsuitje & Teambuilding",
    metaDescription:
      "Creatieve kunstworkshops in Amsterdam voor bedrijfsuitjes, teambuilding en groepen. Twee Amsterdamse kunstenaars, atelier op de Wallen, materiaal inbegrepen.",
    /* De H1. Stond op "Wonderland Workshops"; het merk staat nog in de header,
       de <title> en de footer van elke pagina. */
    heroTitle: "Kunstworkshops in Amsterdam",

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

    faqEyebrow: "Vragen",
    faqTitle: "Een workshop boeken",
  },

  workshopsPage: {
    metaTitle: "Workshops in Amsterdam voor bedrijven en groepen",
    metaDescription:
      "Vier kunstworkshops in Amsterdam: maak je eigen merch, model tekenen, mixed media, of een workshop op maat. Voor bedrijfsuitjes, teambuilding en groepen.",
    eyebrow: "Workshops",
    title: "Vier kunstworkshops in Amsterdam",
    lead: "Van 6 tot 12 personen in ons atelier, en voor zoveel mensen als je wilt op je kantoor of locatie.",
    /* Zie de toelichting in en.ts. */
    intro:
      "Drie hiervan zijn vaste workshops waaruit je kunt kiezen, en de vierde wordt rond jullie gelegenheid geschreven. Kies je voor een team: de merch-workshop is de enige die eindigt met één object waar de hele groep achter staat, de modeltekensessie is het meest geconcentreerd, en mixed media is het losste en het snelste.",
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
    faqEyebrow: "Vragen",
    faqTitle: "Over deze workshop",
  },

  gallery: {
    metaTitle: "Galerie: kunstworkshops in Amsterdam | Wonderland Workshops",
    metaDescription:
      "Foto's van onze kunstworkshops in Amsterdam: het atelier op de Wallen, de sessies, en de tekeningen, schilderijen en prints die erin gemaakt worden.",
    eyebrow: "Galerie",
    title: "Galerie kunstworkshops",
    lead: "Het atelier, de sessies, en wat mensen erin maken.",
    /* Deze pagina had 30 woorden tekst bij 71 foto's. */
    bodyA:
      "Alles hier is gemaakt in ons atelier op de Amsterdamse Wallen, of op het kantoor van een bedrijf, door mensen die meestal jaren niets hadden getekend. Inktportretten, houtskoolfiguren, collage, en linnen tassen en shirts geprint in de merch-workshop.",
    bodyB:
      "Als je wilt zien hoe een workshop er echt uitziet voordat je er een boekt: dit is het. Tafels vol papier, werk dat op de vloer ligt te drogen, en een groep die twee uur verder is dan ze had verwacht te komen.",
    note: "",
  },

  about: {
    metaTitle: "Marie & Mette, Amsterdamse kunstenaars | Wonderland Workshops",
    metaDescription:
      "Marie en Mette ontmoetten elkaar op de Gerrit Rietveld Academie en geven kunstworkshops in Amsterdam vanuit hun atelier op de Wallen, voor bedrijven en groepen.",
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
    /* Zie de toelichting in en.ts. */
    atWorkTitle: "In het atelier",
    marieCaption: "Marie op straat met een camera",
    findUsTitle: "Waar je ons vindt",
    findUsBody:
      "Ons atelier zit op de Oudezijds Achterburgwal, midden op de Amsterdamse Wallen, vijf minuten lopen van Amsterdam Centraal.",
    directions: "Openen in Maps",
    studioCaption: "Mette begeleidt een sessie in het atelier",
    languagesTitle: "Talen",
    languages: "Nederlands, Engels en een beetje Frans",
    whereTitle: "Waar",
    where: "De Wallen, Amsterdam",
    capacityTitle: "Groepsgrootte",
    capacity: "6 tot 12 in ons atelier · elk aantal op jouw locatie",
  },

  estimate: {
    metaTitle: "Wat kost een kunstworkshop in Amsterdam? | Prijzen",
    metaDescription:
      "Wat een kunstworkshop in Amsterdam kost. Kies een workshop, groepsgrootte en locatie en zie de prijs, inclusief btw, atelierhuur en de vergoeding voor het model.",
    eyebrow: "Prijzen",
    title: "Wat kost een kunstworkshop?",
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
