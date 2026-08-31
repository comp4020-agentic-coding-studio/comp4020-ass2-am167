import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";

// The underlying collection and URL remain `sessions`; these labels are the
// language students see.
export const sessionLabels = {
  singular: "Studio",
  plural: "Studios",
} as const;

// The people collection's role values, in the studio's own language. Both the
// people grid and the individual person pages read this, so a label only ever
// has to change in one place --- and `guest` reads as the visiting critic the
// policies page tells students to expect at assessed juries.
export const roleLabels = {
  convenor: "Course convenor",
  tutor: "Studio tutor",
  guest: "Visiting critic",
  other: "",
} as const;

export const roleOrder = ["convenor", "tutor", "guest", "other"] as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  links: [
    { text: "Lectures", href: "/lectures/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "People", href: "/people/" },
    { text: "Policies", href: "/policies/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
});
