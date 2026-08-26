#!/usr/bin/env python3
"""
Generate public/og.png (English) and public/og-nl.png (Dutch).

These are the link previews on WhatsApp, LinkedIn, Slack and X. Before this
script existed every page pointed at /og.png and it 404'd, so shares rendered
as a bare grey box.

The design is the site's own: the --electric field (#0A70BF, sampled from the
hero collage so the artwork sits invisibly inside it), a 3px white rule, and
Archivo ExtraBold uppercase, matching --font-display.

Run:
    python3 scripts/make-og.py

Needs Pillow and the two OFL fonts, which it downloads to a temp dir if they
are not passed in. Regenerate only if the wordmark or the headline changes.
"""
import os
import subprocess
import sys
import tempfile

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630                 # the size every scraper crops to
ELECTRIC = (10, 112, 191)        # #0A70BF == var(--electric)
WHITE = (255, 255, 255)
PALE = (188, 219, 246)

ARCHIVO_URL = (
    "https://raw.githubusercontent.com/google/fonts/main/ofl/archivo/"
    "Archivo%5Bwdth%2Cwght%5D.ttf"
)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def font_path() -> str:
    """Archivo variable, downloaded once into a temp dir."""
    dest = os.path.join(tempfile.gettempdir(), "Archivo-variable.ttf")
    if not os.path.exists(dest):
        subprocess.run(["curl", "-sL", ARCHIVO_URL, "-o", dest], check=True)
    return dest


_cache: dict = {}


def archivo(size: int, weight: int) -> ImageFont.FreeTypeFont:
    """Archivo at a given size and weight.

    The axis order is [Weight, Width], NOT the [wdth, wght] the filename
    suggests. Passing them the other way round silently renders Thin at
    maximum width, which looks like a completely different typeface.
    """
    key = (size, weight)
    if key not in _cache:
        f = ImageFont.truetype(font_path(), size)
        f.set_variation_by_axes([float(weight), 100.0])
        _cache[key] = f
    return _cache[key]


def build(out: str, eyebrow: str, lines: list, footer: list) -> None:
    im = Image.new("RGB", (W, H), ELECTRIC)
    d = ImageDraw.Draw(im)

    # Right panel: the hero collage cropped to the figure, bordered the way
    # every image on the site is bordered. Its own ground is this exact blue,
    # so the crop has no visible seam.
    pw, ph = 396, 486
    px, py = W - pw - 56, (H - ph) // 2
    art = Image.open(os.path.join(ROOT, "src/assets/hero-collage.png")).convert("RGBA")
    aw, ah = art.size
    art = art.crop((int(aw * 0.28), int(ah * 0.20), int(aw * 0.72), ah))
    scale = max(pw / art.width, ph / art.height)
    art = art.resize((int(art.width * scale), int(art.height * scale)), Image.LANCZOS)
    panel = Image.new("RGB", (pw, ph), ELECTRIC)
    panel.paste(art, (-(art.width - pw) // 2, -(art.height - ph) // 2), art)
    im.paste(panel, (px, py))
    d.rectangle([px, py, px + pw - 1, py + ph - 1], outline=WHITE, width=3)

    x = 64
    avail = px - 56 - x

    # Pillow has no letter-spacing, so the eyebrow is drawn glyph by glyph to
    # match the site's .eyebrow tracking.
    def tracked(y: int, text: str, font, fill, extra: float) -> None:
        cx = x
        for ch in text:
            d.text((cx, y), ch, font=font, fill=fill)
            cx += d.textlength(ch, font=font) + extra

    tracked(96, eyebrow, archivo(20, 700), PALE, 3.4)

    # Shrink the headline until the longest line clears the artwork panel. The
    # Dutch headline is a good deal wider than the English one, so this is not
    # decoration: hard-coding a size would overlap the figure in one locale.
    size = 92
    while size > 40:
        f = archivo(size, 800)
        if max(d.textlength(l, font=f) for l in lines) <= avail:
            break
        size -= 2
    f = archivo(size, 800)
    y = 158
    for line in lines:
        d.text((x, y), line, font=f, fill=WHITE)
        y += int(size * 1.02)

    small = archivo(26, 600)
    d.text((x, 434), footer[0], font=small, fill=WHITE)
    d.text((x, 470), footer[1], font=small, fill=PALE)

    d.rectangle([16, 16, W - 17, H - 17], outline=WHITE, width=3)
    im.save(out, "PNG", optimize=True)
    widest = int(max(d.textlength(l, font=f) for l in lines))
    print(f"{out}  headline={size}px  fits {widest}px into {avail}px")


def main() -> None:
    pub = os.path.join(ROOT, "public")
    footer = ["Wonderland Workshops", "amsterdamwonderland.nl"]
    eyebrow = "MARIE & METTE  ·  AMSTERDAM"
    build(os.path.join(pub, "og.png"), eyebrow,
          ["ART", "WORKSHOPS", "IN AMSTERDAM"], footer)
    build(os.path.join(pub, "og-nl.png"), eyebrow,
          ["KUNST-", "WORKSHOPS", "IN AMSTERDAM"], footer)


if __name__ == "__main__":
    sys.exit(main())
