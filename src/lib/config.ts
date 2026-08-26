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
export const STREET_ADDRESS = "Oudezijds Achterburgwal 79-M";

/**
 * Postcode, confirmed twice rather than assumed: Google's own resolved place URL
 * for the studio and an independent OpenStreetMap lookup both return 1012 DC.
 */
export const POSTAL_CODE = "1012 DC";

/**
 * Coordinates from OpenStreetMap for Oudezijds Achterburgwal 79 (it holds 79C
 * and 79D as separate nodes at the same point; 79-M is the same building, so
 * this is accurate to a few metres). Included because a precise `geo` on the
 * LocalBusiness helps Google place the studio in the local pack. Not invented:
 * if the number ever changes, re-run the lookup rather than nudging these.
 */
export const GEO = { latitude: 52.3728361, longitude: 4.8985544 };

export const EMAIL = "mariemettezakelijk@gmail.com";

export const INSTAGRAM = "https://www.instagram.com/amsterdam_wonderland/";
export const INSTAGRAM_HANDLE = "@amsterdam_wonderland";

/** The address on one line, for display. */
export const ADDRESS_LINE = `${STREET_ADDRESS}, ${POSTAL_CODE} Amsterdam`;

/**
 * The address as a map link that works on every device.
 *
 * `google.com/maps/search/?api=1&query=...` is Google's documented universal
 * link: on Android and iOS it hands off to the Google Maps app when installed
 * and falls back to the browser otherwise, and on desktop it just opens Maps.
 * A `geo:` URI would be more native but only Android honours it, and
 * maps.apple.com only works on Apple devices, so one Google link reaches
 * everyone with one href.
 *
 * Ali's own share link (https://maps.app.goo.gl/HbdHeu9nakBV7MW8A) points at
 * the same place, but short links are opaque, can be retired, and carried a
 * tracking parameter. Building the URL from the address keeps it readable and
 * means it cannot rot.
 */
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${STREET_ADDRESS}, ${POSTAL_CODE} Amsterdam, Netherlands`,
)}`;

export const hasPreciseLocation = STREET_ADDRESS.length > 0;

export const hasPhone = PHONE_E164.length > 0;
export const hasWhatsApp = WHATSAPP.length > 0;
export const hasForm = FORMSPREE_ID.length > 0;
export const formEndpoint = hasForm ? `https://formspree.io/f/${FORMSPREE_ID}` : "";
export const telHref = `tel:+${PHONE_E164}`;
export const waHref = `https://wa.me/${WHATSAPP}`;
