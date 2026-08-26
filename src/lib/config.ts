/**
 * Site configuration that Ali needs to fill in.
 * Anything left as an empty string is handled gracefully — the UI falls back
 * rather than rendering a broken control.
 */

/** Phone number as dialled, e.g. "+31 6 12 34 56 78". Empty => no call button. */
export const PHONE_DISPLAY = "+31 6 22409292";

/** Same number, digits only with country code, for the tel: link. e.g. "31612345678" */
export const PHONE_E164 = "31622409292";

/** WhatsApp: digits only with country code. Empty => no WhatsApp button. */
export const WHATSAPP = "31622409292";

/** Formspree form ID, e.g. "xyzabcd" from https://formspree.io/f/xyzabcd.
 *  Empty => the contact form is replaced by a prominent email block. */
export const FORMSPREE_ID = "";

/** Street address for the atelier. Empty => only "Amsterdam" is shown. */
export const STREET_ADDRESS = "";

export const EMAIL = "mariemettezakelijk@gmail.com";

export const INSTAGRAM = "https://www.instagram.com/amsterdam_wonderland/";
export const INSTAGRAM_HANDLE = "@amsterdam_wonderland";

export const hasPhone = PHONE_E164.length > 0;
export const hasWhatsApp = WHATSAPP.length > 0;
export const hasForm = FORMSPREE_ID.length > 0;
export const formEndpoint = hasForm ? `https://formspree.io/f/${FORMSPREE_ID}` : "";
export const telHref = `tel:+${PHONE_E164}`;
export const waHref = `https://wa.me/${WHATSAPP}`;
