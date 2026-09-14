// Builds the teaching team's portraits as two-ink SVG and rasterises them to
// AVIF, so the people pages carry artwork made for this site rather than the
// starter's.
//
// Hand-authored rather than model-generated: the brand is three flat colours
// and a halftone, which vector shapes hit exactly and a diffusion model does
// not. Every portrait is the same construction --- angular bust, gold shadow
// plane down one side, halftone in the shadow --- so the grid reads as one set.
//
// What varies is the person. An earlier pass varied only hair silhouette,
// facing and backdrop position on top of one shared face, which meant two
// people with short hair facing the same way were the same portrait; the
// people grid showed the convenor and a tutor wearing each other's head.
// So the face itself is now per-person: skull proportions, brow, eyes, nose,
// mouth, what they wear at the neck, and whether they have glasses or a beard.
// `spec/people.test.ts` holds the result to it by comparing head regions.
//
// Run: node scripts/make-portraits.ts

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";

const SIZE = 800;

// Sampled from the starter artwork so the new portraits sit in the same print.
const PAPER = "#f6eedd";
const GOLD = "#c69f57";
const GOLD_DARK = "#a8813c";
const INK = "#17150f";

/** Skull proportions. Everything on the face is positioned from these. */
interface Face {
  /** Crown and chin, in canvas coordinates. */
  topY: number;
  chinY: number;
  /** Half-widths at temple, cheekbone and jaw. */
  temple: number;
  cheek: number;
  jaw: number;
}

interface Person {
  slug: string;
  face: Face;
  hair: "cropped" | "bob" | "volume" | "bun" | "parted";
  brow: "level" | "arched" | "heavy";
  eye: "oval" | "round" | "narrow";
  nose: "wedge" | "straight" | "snub";
  mouth: "full" | "line" | "pursed";
  glasses: "rect" | "round" | "none";
  /** What they wear at the neck. */
  garment: "lapels" | "openShirt" | "rollneck" | "scarf" | "bandCollar";
  beard: boolean;
  earring: boolean;
  /** Which side of the face carries the gold shadow plane. */
  facing: "left" | "right";
  /** Backdrop block: left edge and height, as fractions of the canvas. */
  block: number;
  blockHeight: number;
}

const people: Person[] = [
  {
    // The convenor: tallest skull, the most hair, the only rectangular glasses.
    slug: "marisol-quaye",
    face: { topY: 104, chinY: 506, temple: 128, cheek: 120, jaw: 74 },
    hair: "volume",
    brow: "arched",
    eye: "oval",
    nose: "wedge",
    mouth: "full",
    glasses: "rect",
    garment: "lapels",
    beard: false,
    earring: false,
    facing: "right",
    block: 0.62,
    blockHeight: 0.54,
  },
  {
    // Broad square jaw, cropped hair, a beard plane --- nothing else here has
    // weight low on the face.
    slug: "idris-fenn",
    face: { topY: 126, chinY: 494, temple: 137, cheek: 134, jaw: 104 },
    hair: "cropped",
    brow: "heavy",
    eye: "narrow",
    nose: "straight",
    mouth: "line",
    glasses: "none",
    garment: "openShirt",
    beard: true,
    earring: false,
    facing: "left",
    block: 0.12,
    blockHeight: 0.5,
  },
  {
    // Round face, round glasses, a roll-neck that eats the jawline.
    slug: "nadia-ilkhom",
    face: { topY: 130, chinY: 480, temple: 133, cheek: 131, jaw: 92 },
    hair: "bob",
    brow: "level",
    eye: "round",
    nose: "snub",
    mouth: "pursed",
    glasses: "round",
    garment: "rollneck",
    beard: false,
    earring: false,
    facing: "right",
    block: 0.56,
    blockHeight: 0.42,
  },
  {
    // Long narrow head and a deep side part: the tallest forehead in the set.
    slug: "tobias-wren",
    face: { topY: 116, chinY: 512, temple: 116, cheek: 108, jaw: 66 },
    hair: "parted",
    brow: "level",
    eye: "oval",
    nose: "straight",
    mouth: "line",
    glasses: "none",
    garment: "scarf",
    beard: false,
    earring: false,
    facing: "left",
    block: 0.2,
    blockHeight: 0.62,
  },
  {
    // The visiting critic, and the only one not dressed as staff: hard
    // cheekbones, hair off the face entirely, a band collar and one earring.
    slug: "sunniva-marek",
    face: { topY: 134, chinY: 500, temple: 122, cheek: 129, jaw: 70 },
    hair: "bun",
    brow: "heavy",
    eye: "narrow",
    nose: "wedge",
    mouth: "pursed",
    glasses: "none",
    garment: "bandCollar",
    beard: false,
    earring: true,
    facing: "right",
    block: 0.68,
    blockHeight: 0.46,
  },
];

const pts = (points: [number, number][]): string =>
  points.map(([x, y]) => `${Math.round(x)},${Math.round(y)}`).join(" ");

// The head is a ten-sided block rather than an oval --- the starter's language
// is cut paper, not airbrush --- struck from the skull proportions so a wide
// jaw and a long forehead are different heads, not the same head relabelled.
const at = (f: Face, t: number): number => f.topY + t * (f.chinY - f.topY);

const headPolygon = (f: Face): [number, number][] => [
  [400, f.topY],
  [400 - f.temple * 0.78, at(f, 0.08)],
  [400 - f.temple, at(f, 0.36)],
  [400 - f.cheek, at(f, 0.64)],
  [400 - f.jaw, at(f, 0.87)],
  [400, f.chinY],
  [400 + f.jaw, at(f, 0.87)],
  [400 + f.cheek, at(f, 0.64)],
  [400 + f.temple, at(f, 0.36)],
  [400 + f.temple * 0.78, at(f, 0.08)],
];

/** The half of the head that carries the gold plane, split down the centre. */
const shadowPolygon = (f: Face, flip: boolean): [number, number][] => {
  const head = headPolygon(f);
  return flip ? [head[0], ...head.slice(1, 6)] : [head[0], ...head.slice(6).reverse(), head[5]];
};

const hairMarkup = (person: Person): string => {
  const f = person.face;
  const w = f.temple;
  switch (person.hair) {
    // A cap that hugs the skull: the hairline sits low and flat.
    case "cropped":
      return `<polygon points="${pts([
        [400, f.topY - 16],
        [400 - w * 0.86, at(f, 0.05)],
        [400 - w - 8, at(f, 0.35)],
        [400 - w + 8, at(f, 0.39)],
        [400 - w * 0.82, at(f, 0.18)],
        [400, at(f, 0.14)],
        [400 + w * 0.82, at(f, 0.18)],
        [400 + w - 8, at(f, 0.39)],
        [400 + w + 8, at(f, 0.35)],
        [400 + w * 0.86, at(f, 0.05)],
      ])}" fill="${INK}"/>`;
    // Falls straight to the jaw on both sides and hides the ears.
    case "bob":
      return `<polygon points="${pts([
        [400, f.topY - 22],
        [400 - w * 0.9, at(f, 0.04)],
        [400 - w - 26, at(f, 0.4)],
        [400 - w - 20, at(f, 0.92)],
        [400 - w + 26, at(f, 0.96)],
        [400 - w + 14, at(f, 0.46)],
        [400 - w * 0.8, at(f, 0.2)],
        [400, at(f, 0.15)],
        [400 + w * 0.8, at(f, 0.2)],
        [400 + w - 14, at(f, 0.46)],
        [400 + w - 26, at(f, 0.96)],
        [400 + w + 20, at(f, 0.92)],
        [400 + w + 26, at(f, 0.4)],
        [400 + w * 0.9, at(f, 0.04)],
      ])}" fill="${INK}"/>`;
    // Swept back and up: wider than the skull, and taller than anyone else's.
    case "volume":
      return `<polygon points="${pts([
        [400, f.topY - 44],
        [400 - w * 1.04, at(f, -0.02)],
        [400 - w - 50, at(f, 0.3)],
        [400 - w - 28, at(f, 0.66)],
        [400 - w + 16, at(f, 0.6)],
        [400 - w + 4, at(f, 0.34)],
        [400 - w * 0.74, at(f, 0.12)],
        [400, at(f, 0.07)],
        [400 + w * 0.74, at(f, 0.12)],
        [400 + w - 4, at(f, 0.34)],
        [400 + w - 16, at(f, 0.6)],
        [400 + w + 28, at(f, 0.66)],
        [400 + w + 50, at(f, 0.3)],
        [400 + w * 1.04, at(f, -0.02)],
      ])}" fill="${INK}"/>`;
    // Pulled flat over the skull; the bun itself is drawn behind the head.
    case "bun":
      return `<polygon points="${pts([
        [400, f.topY - 10],
        [400 - w * 0.9, at(f, 0.05)],
        [400 - w - 4, at(f, 0.33)],
        [400 - w + 12, at(f, 0.36)],
        [400 - w * 0.88, at(f, 0.14)],
        [400, at(f, 0.09)],
        [400 + w * 0.88, at(f, 0.14)],
        [400 + w - 12, at(f, 0.36)],
        [400 + w + 4, at(f, 0.33)],
        [400 + w * 0.9, at(f, 0.05)],
      ])}" fill="${INK}"/>`;
    // A deep side part: one side sweeps across the brow, the other is shorn.
    case "parted": {
      const s = person.facing === "left" ? -1 : 1;
      return `<polygon points="${pts([
        [400, f.topY - 26],
        [400 - s * (w * 0.95), at(f, 0.02)],
        [400 - s * (w + 14), at(f, 0.34)],
        [400 - s * (w + 2), at(f, 0.52)],
        [400 - s * (w - 18), at(f, 0.46)],
        [400 - s * (w - 10), at(f, 0.22)],
        [400 + s * (w * 0.3), at(f, 0.1)],
        [400 + s * (w * 0.86), at(f, 0.27)],
        [400 + s * (w + 6), at(f, 0.36)],
        [400 + s * (w * 0.94), at(f, 0.05)],
      ])}" fill="${INK}"/>`;
    }
  }
};

const browMarkup = (person: Person): string => {
  const f = person.face;
  // Glasses occupy the brow line, so a spectacled brow sits above the frame
  // rather than inside the lens, where it reads as a smudge on the glass.
  const y = at(f, person.glasses === "none" ? 0.385 : 0.315);
  const inner = f.cheek * 0.2;
  const outer = f.cheek * 0.72;
  switch (person.brow) {
    case "level":
      return `<path d="M ${400 - outer} ${y} L ${400 - inner} ${y}" stroke="${INK}" stroke-width="12" stroke-linecap="round" fill="none"/>
  <path d="M ${400 + inner} ${y} L ${400 + outer} ${y}" stroke="${INK}" stroke-width="12" stroke-linecap="round" fill="none"/>`;
    case "arched":
      return `<path d="M ${400 - outer} ${y + 4} Q ${400 - (inner + outer) / 2} ${y - 22} ${400 - inner} ${y - 6}" stroke="${INK}" stroke-width="12" stroke-linecap="round" fill="none"/>
  <path d="M ${400 + inner} ${y - 6} Q ${400 + (inner + outer) / 2} ${y - 22} ${400 + outer} ${y + 4}" stroke="${INK}" stroke-width="12" stroke-linecap="round" fill="none"/>`;
    case "heavy":
      return `<path d="M ${400 - outer} ${y - 10} L ${400 - inner} ${y + 2}" stroke="${INK}" stroke-width="18" stroke-linecap="round" fill="none"/>
  <path d="M ${400 + inner} ${y + 2} L ${400 + outer} ${y - 10}" stroke="${INK}" stroke-width="18" stroke-linecap="round" fill="none"/>`;
  }
};

const eyeMarkup = (person: Person): string => {
  const f = person.face;
  const y = at(f, 0.472);
  const dx = f.cheek * 0.45;
  switch (person.eye) {
    case "oval":
      return `<ellipse cx="${400 - dx}" cy="${y}" rx="17" ry="11" fill="${INK}"/>
  <ellipse cx="${400 + dx}" cy="${y}" rx="17" ry="11" fill="${INK}"/>`;
    case "round":
      return `<circle cx="${400 - dx}" cy="${y}" r="13" fill="${INK}"/>
  <circle cx="${400 + dx}" cy="${y}" r="13" fill="${INK}"/>`;
    case "narrow":
      return `<path d="M ${400 - dx - 20} ${y} L ${400 - dx + 20} ${y}" stroke="${INK}" stroke-width="11" stroke-linecap="round"/>
  <path d="M ${400 + dx - 20} ${y} L ${400 + dx + 20} ${y}" stroke="${INK}" stroke-width="11" stroke-linecap="round"/>`;
  }
};

// One angled plane down the shadow side, never a line down the centre seam.
const noseMarkup = (person: Person): string => {
  const f = person.face;
  const s = person.facing === "left" ? -1 : 1;
  const top = at(f, 0.545);
  const bottom = at(f, 0.667);
  switch (person.nose) {
    case "wedge":
      return `<path d="M ${400 + s * 2} ${top} L ${400 + s * 22} ${bottom} L ${400 - s * 4} ${bottom + 6}" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
    case "straight":
      return `<path d="M ${400 + s * 8} ${top - 6} L ${400 + s * 12} ${bottom} L ${400 - s * 8} ${bottom + 2}" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
    case "snub":
      return `<path d="M ${400 + s * 4} ${top + 14} Q ${400 + s * 24} ${bottom} ${400 - s * 6} ${bottom - 2}" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
};

const mouthMarkup = (person: Person): string => {
  const f = person.face;
  const y = at(f, 0.755);
  const half = f.jaw * 0.56;
  // A beard covers the mouth, and ink on ink is no mouth at all --- cut it out
  // of the beard in paper instead.
  const c = person.beard ? PAPER : INK;
  switch (person.mouth) {
    case "full":
      return `<path d="M ${400 - half} ${y} Q 400 ${y - 14} ${400 + half} ${y} Q 400 ${y + 26} ${400 - half} ${y} Z" fill="${c}"/>`;
    case "line":
      return `<path d="M ${400 - half} ${y - 4} Q 400 ${y + 10} ${400 + half} ${y - 4}" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/>`;
    case "pursed":
      return `<path d="M ${400 - half * 0.66} ${y} Q 400 ${y - 12} ${400 + half * 0.66} ${y} Q 400 ${y + 18} ${400 - half * 0.66} ${y} Z" fill="${c}"/>`;
  }
};

const glassesMarkup = (person: Person): string => {
  const f = person.face;
  const y = at(f, 0.472);
  const dx = f.cheek * 0.45;
  if (person.glasses === "none") return "";
  const arms = `<path d="M ${400 - dx - 42} ${y - 8} L ${400 - f.temple + 2} ${y - 18}"/>
    <path d="M ${400 + dx + 42} ${y - 8} L ${400 + f.temple - 2} ${y - 18}"/>`;
  if (person.glasses === "round") {
    return `<g fill="none" stroke="${INK}" stroke-width="7">
    <circle cx="${400 - dx}" cy="${y}" r="41"/>
    <circle cx="${400 + dx}" cy="${y}" r="41"/>
    <path d="M ${400 - dx + 41} ${y} L ${400 + dx - 41} ${y}"/>
    ${arms}
  </g>`;
  }
  return `<g fill="none" stroke="${INK}" stroke-width="7">
    <rect x="${400 - dx - 41}" y="${y - 29}" width="82" height="58" rx="10"/>
    <rect x="${400 + dx - 41}" y="${y - 29}" width="82" height="58" rx="10"/>
    <path d="M ${400 - dx + 41} ${y} L ${400 + dx - 41} ${y}"/>
    ${arms}
  </g>`;
};

// A flat plane of ink across the jaw, clipped to the head so it cannot spill
// past the silhouette.
const beardMarkup = (person: Person): string => {
  if (!person.beard) return "";
  const f = person.face;
  return `<clipPath id="headClip"><polygon points="${pts(headPolygon(f))}"/></clipPath>
  <g clip-path="url(#headClip)">
    <polygon points="${pts([
      [400 - f.cheek - 8, at(f, 0.6)],
      [400 - f.cheek + 14, at(f, 0.95)],
      [400, f.chinY + 16],
      [400 + f.cheek - 14, at(f, 0.95)],
      [400 + f.cheek + 8, at(f, 0.6)],
      [400 + f.cheek * 0.45, at(f, 0.7)],
      [400, at(f, 0.71)],
      [400 - f.cheek * 0.45, at(f, 0.7)],
    ])}" fill="${INK}"/>
  </g>`;
};

// Whether the garment closes over the base of the neck. A roll-neck does and a
// lapel does not, and that decides whether the neck is drawn under it or over.
const coversNeck = (garment: Person["garment"]): boolean =>
  garment === "rollneck" || garment === "scarf" || garment === "bandCollar";

const garmentMarkup = (person: Person): string => {
  const shoulders = `<polygon points="${pts([
    [104, 800],
    [150, 660],
    [300, 588],
    [400, 566],
    [500, 588],
    [650, 660],
    [696, 800],
  ])}" fill="${GOLD}"/>`;
  // One shoulder in halftone on every bust, so the shadow plane on the face
  // has an answer below it.
  const shadedShoulder = `<polygon points="${pts([
    [500, 588],
    [650, 660],
    [696, 800],
    [428, 800],
  ])}" fill="url(#halftone)"/>`;

  switch (person.garment) {
    case "lapels":
      return `${shoulders}
  <polygon points="${pts([[300, 588], [400, 566], [372, 800], [232, 800]])}" fill="${INK}"/>
  <polygon points="${pts([[500, 588], [400, 566], [428, 800], [568, 800]])}" fill="url(#halftone)"/>
  <polygon points="${pts([[352, 574], [400, 640], [448, 574], [430, 552], [370, 552]])}" fill="${PAPER}"/>`;
    // Shirt worn open: a broad paper front, the chest in shadow behind it, and
    // the halftone pushed out to the shoulder.
    case "openShirt":
      return `${shoulders}
  <polygon points="${pts([[500, 588], [650, 660], [696, 800], [488, 800], [488, 592]])}" fill="url(#halftone)"/>
  <polygon points="${pts([[312, 590], [400, 578], [488, 590], [488, 800], [312, 800]])}" fill="${PAPER}"/>
  <polygon points="${pts([[322, 576], [374, 584], [400, 676], [338, 618]])}" fill="${PAPER}" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>
  <polygon points="${pts([[478, 576], [426, 584], [400, 676], [462, 618]])}" fill="${PAPER}" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>
  <path d="M 400 676 L 400 800" stroke="${INK}" stroke-width="6"/>`;
    // A roll of knit the full width of the shoulders, closing over the jaw.
    case "rollneck":
      return `${shoulders}
  ${shadedShoulder}
  <path d="M 292 616 Q 400 474 508 616 L 508 690 Q 400 548 292 690 Z" fill="${INK}"/>`;
    // The same band, looser, with one end thrown down the front.
    case "scarf":
      return `${shoulders}
  ${shadedShoulder}
  <path d="M 296 618 Q 400 482 504 618 L 496 678 Q 400 546 304 678 Z" fill="${INK}"/>
  <polygon points="${pts([[300, 650], [384, 600], [366, 800], [280, 800]])}" fill="${INK}"/>`;
    // A standing collar and a buttoned placket: nobody else here is buttoned up.
    case "bandCollar":
      return `${shoulders}
  ${shadedShoulder}
  <polygon points="${pts([[334, 586], [400, 574], [466, 586], [466, 800], [334, 800]])}" fill="${PAPER}"/>
  <path d="M 332 604 Q 400 486 468 604 L 466 664 Q 400 568 334 664 Z" fill="${PAPER}" stroke="${INK}" stroke-width="7" stroke-linejoin="round"/>
  <path d="M 400 668 L 400 800" stroke="${INK}" stroke-width="6"/>
  <circle cx="400" cy="712" r="9" fill="${INK}"/>
  <circle cx="400" cy="756" r="9" fill="${INK}"/>`;
  }
};

const portrait = (person: Person): string => {
  const f = person.face;
  const flip = person.facing === "left";
  const blockX = Math.round(person.block * SIZE);
  const blockH = Math.round(person.blockHeight * SIZE);
  // Hair that falls past the temples covers the ears.
  const earsShown = person.hair === "cropped" || person.hair === "bun" || person.hair === "parted";
  const earX = flip ? 400 - f.cheek : 400 + f.cheek;
  const earOut = flip ? -1 : 1;
  const neck = `<polygon points="${pts([
    [400 - f.jaw * 0.56, at(f, 0.87)],
    [400 + f.jaw * 0.56, at(f, 0.87)],
    [400 + f.jaw * 0.62, 566],
    [400, 596],
    [400 - f.jaw * 0.62, 566],
  ])}" fill="${GOLD_DARK}"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">
  <defs>
    <pattern id="halftone" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
      <rect width="9" height="9" fill="${GOLD}"/>
      <circle cx="4.5" cy="4.5" r="2.1" fill="${INK}" fill-opacity="0.55"/>
    </pattern>
    <pattern id="halftoneLight" width="11" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
      <rect width="11" height="11" fill="${GOLD}"/>
      <circle cx="5.5" cy="5.5" r="1.7" fill="${INK}" fill-opacity="0.35"/>
    </pattern>
  </defs>

  <rect width="${SIZE}" height="${SIZE}" fill="${PAPER}"/>

  <!-- backdrop block -->
  <rect x="${blockX}" y="${Math.round(600 - blockH)}" width="212" height="${blockH}" fill="${GOLD}"/>

  <!-- neck and whatever they wear at the neck, in the order the garment implies -->
  ${coversNeck(person.garment) ? neck : ""}
  ${garmentMarkup(person)}
  ${coversNeck(person.garment) ? "" : neck}

  <!-- bun, behind the head so it reads as being at the back -->
  ${
    person.hair === "bun"
      ? `<circle cx="${flip ? 400 - f.temple - 32 : 400 + f.temple + 32}" cy="${Math.round(at(f, 0.3))}" r="54" fill="${INK}"/>`
      : ""
  }

  <!-- head -->
  <polygon points="${pts(headPolygon(f))}" fill="${PAPER}"/>
  <polygon points="${pts(shadowPolygon(f, flip))}" fill="url(#halftoneLight)"/>
  ${beardMarkup(person)}
  <polygon points="${pts(headPolygon(f))}" fill="none" stroke="${INK}" stroke-width="7" stroke-linejoin="round"/>

  <!-- ear, on the shadow side so it reads against the gold plane -->
  ${
    earsShown
      ? `<polygon points="${pts([
          [earX - earOut * 4, at(f, 0.47)],
          [earX + earOut * 26, at(f, 0.52)],
          [earX + earOut * 22, at(f, 0.6)],
          [earX - earOut * 2, at(f, 0.62)],
        ])}" fill="${GOLD}" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>`
      : ""
  }
  ${
    person.earring
      ? `<circle cx="${earX + earOut * 16}" cy="${Math.round(at(f, 0.66))}" r="13" fill="${INK}"/>`
      : ""
  }

  <!-- face -->
  ${browMarkup(person)}
  ${glassesMarkup(person)}
  ${eyeMarkup(person)}
  ${noseMarkup(person)}
  ${mouthMarkup(person)}

  <!-- hair, last, so it sits over the skull outline -->
  ${hairMarkup(person)}
</svg>`;
};

const outDir = resolve("src/content/people");

for (const person of people) {
  const svg = portrait(person);
  const file = resolve(outDir, `${person.slug}.avif`);
  await sharp(Buffer.from(svg)).avif({ quality: 72, effort: 6 }).toFile(file);
  writeFileSync(resolve("/tmp", `${person.slug}.png`), await sharp(Buffer.from(svg)).png().toBuffer());
  console.log(`wrote ${file}`);
}
