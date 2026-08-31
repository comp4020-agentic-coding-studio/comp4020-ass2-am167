// Builds the teaching team's portraits as two-ink SVG and rasterises them to
// AVIF, so the people pages carry artwork made for this site rather than the
// starter's.
//
// Hand-authored rather than model-generated: the brand is three flat colours
// and a halftone, which vector shapes hit exactly and a diffusion model does
// not. Every portrait is the same construction --- angular bust, gold shadow
// plane down one side, halftone in the shadow --- varied per person by hair
// silhouette, framing and which way they face, so the grid reads as one set.
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

interface Person {
  slug: string;
  /** Hair silhouette. */
  hair: "cropped" | "bob" | "volume" | "tied" | "swept";
  /** Which side of the face carries the gold shadow plane. */
  facing: "left" | "right";
  glasses: boolean;
  /** Horizontal position of the backdrop block, as a fraction of the canvas. */
  block: number;
}

const people: Person[] = [
  { slug: "marisol-quaye", hair: "volume", facing: "right", glasses: true, block: 0.62 },
  { slug: "idris-fenn", hair: "cropped", facing: "left", glasses: false, block: 0.14 },
  { slug: "nadia-ilkhom", hair: "bob", facing: "right", glasses: true, block: 0.58 },
  { slug: "tobias-wren", hair: "swept", facing: "left", glasses: false, block: 0.2 },
  { slug: "sunniva-marek", hair: "tied", facing: "right", glasses: false, block: 0.66 },
];

const pts = (points: [number, number][]): string =>
  points.map(([x, y]) => `${x},${y}`).join(" ");

// The head, as a ten-sided block rather than an oval --- the starter's language
// is cut paper, not airbrush.
const HEAD: [number, number][] = [
  [400, 112],
  [303, 143],
  [268, 252],
  [277, 362],
  [321, 452],
  [400, 502],
  [479, 452],
  [523, 362],
  [532, 252],
  [497, 143],
];

const hairShapes: Record<Person["hair"], [number, number][]> = {
  cropped: [
    [400, 96],
    [292, 132],
    [258, 250],
    [276, 262],
    [300, 196],
    [400, 172],
    [500, 196],
    [524, 262],
    [542, 250],
    [508, 132],
  ],
  bob: [
    [400, 92],
    [284, 134],
    [246, 268],
    [252, 430],
    [300, 446],
    [288, 300],
    [306, 200],
    [400, 174],
    [494, 200],
    [512, 300],
    [500, 446],
    [548, 430],
    [554, 268],
    [516, 134],
  ],
  volume: [
    [400, 74],
    [268, 122],
    [222, 262],
    [246, 372],
    [292, 356],
    [278, 250],
    [312, 178],
    [400, 156],
    [488, 178],
    [522, 250],
    [508, 356],
    [554, 372],
    [578, 262],
    [532, 122],
  ],
  tied: [
    [400, 94],
    [296, 130],
    [262, 248],
    [280, 258],
    [304, 192],
    [400, 170],
    [496, 192],
    [520, 258],
    [538, 248],
    [504, 130],
  ],
  swept: [
    [400, 98],
    [286, 136],
    [258, 256],
    [278, 264],
    [312, 190],
    [430, 166],
    [512, 210],
    [526, 268],
    [546, 256],
    [512, 130],
  ],
};

const portrait = (person: Person): string => {
  const { facing, glasses, block } = person;
  const flip = facing === "left";
  // The shadow plane is half the head, split down the centre line.
  const shadow: [number, number][] = flip
    ? [[400, 112], [303, 143], [268, 252], [277, 362], [321, 452], [400, 502]]
    : [[400, 112], [497, 143], [532, 252], [523, 362], [479, 452], [400, 502]];

  const blockX = Math.round(block * SIZE);
  const eyeY = 296;
  const browY = 262;

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
  <rect x="${blockX}" y="170" width="212" height="430" fill="${GOLD}"/>

  <!-- shoulders -->
  <polygon points="${pts([
    [104, 800],
    [150, 660],
    [300, 588],
    [400, 566],
    [500, 588],
    [650, 660],
    [696, 800],
  ])}" fill="${GOLD}"/>
  <!-- lapels -->
  <polygon points="${pts([[300, 588], [400, 566], [372, 800], [232, 800]])}" fill="${INK}"/>
  <polygon points="${pts([[500, 588], [400, 566], [428, 800], [568, 800]])}" fill="url(#halftone)"/>
  <!-- collar / shirt -->
  <polygon points="${pts([[352, 574], [400, 640], [448, 574], [430, 552], [370, 552]])}" fill="${PAPER}"/>

  <!-- neck -->
  <polygon points="${pts([[356, 452], [444, 452], [452, 566], [400, 596], [348, 566]])}" fill="${GOLD_DARK}"/>

  ${person.hair === "tied" ? `<circle cx="${flip ? 244 : 556} " cy="238" r="54" fill="${INK}"/>` : ""}

  <!-- head -->
  <polygon points="${pts(HEAD)}" fill="${PAPER}"/>
  <polygon points="${pts(shadow)}" fill="url(#halftoneLight)"/>
  <polygon points="${pts(HEAD)}" fill="none" stroke="${INK}" stroke-width="7" stroke-linejoin="round"/>

  <!-- ear, on the shadow side so it reads against the gold plane -->
  ${person.hair === "tied" ? "" : `<polygon points="${pts([
    [flip ? 274 : 526, 294],
    [flip ? 248 : 552, 312],
    [flip ? 252 : 548, 342],
    [flip ? 278 : 522, 350],
  ])}" fill="${GOLD}" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>`}

  <!-- brows -->
  <path d="M 330 ${browY} L 382 ${browY - 12}" stroke="${INK}" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M 418 ${browY - 12} L 470 ${browY}" stroke="${INK}" stroke-width="13" stroke-linecap="round" fill="none"/>

  ${
    glasses
      ? `<g fill="none" stroke="${INK}" stroke-width="7">
    <rect x="304" y="272" width="82" height="58" rx="10"/>
    <rect x="414" y="272" width="82" height="58" rx="10"/>
    <path d="M 386 296 L 414 296"/>
    <path d="M 304 288 L 274 280"/>
    <path d="M 496 288 L 526 280"/>
  </g>`
      : ""
  }

  <!-- eyes -->
  <ellipse cx="345" cy="${eyeY}" rx="17" ry="11" fill="${INK}"/>
  <ellipse cx="455" cy="${eyeY}" rx="17" ry="11" fill="${INK}"/>

  <!-- nose: one angled plane down the shadow side, not a line down the seam -->
  <path d="${
    flip ? "M 398 324 L 378 366 L 404 372" : "M 402 324 L 422 366 L 396 372"
  }" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- mouth -->
  <path d="M 358 406 Q 400 392 442 406 Q 400 432 358 406 Z" fill="${INK}"/>


  <!-- hair -->
  <polygon points="${pts(hairShapes[person.hair])}" fill="${INK}"/>
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
