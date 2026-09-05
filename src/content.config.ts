import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { courseNodeSchema } from "astro-course-university/schemas";

const weekSchema = z.coerce.number().int().min(1).max(12);
const courseNodeLoader = (dir: string) =>
  glob({ pattern: ["**/*.{md,mdx}", "!**/CLAUDE.md"], base: `src/content/${dir}` });
const teacherRefs = z.array(reference("people")).min(1);

const weightedMarking = z
  .object({
    mode: z.literal("weighted"),
    criteria: z
      .array(z.object({ name: z.string().trim().min(1), weight: z.number().positive() }))
      .min(1),
  })
  .superRefine((marking, ctx) => {
    const total = marking.criteria.reduce((sum, criterion) => sum + criterion.weight, 0);
    if (total !== 100) {
      ctx.addIssue({
        code: "custom",
        path: ["criteria"],
        message: `criterion weights sum to ${total}, not 100`,
      });
    }
  });

const holisticMarking = z.object({
  mode: z.literal("holistic"),
  description: z.string().trim().min(40),
});

export const collections = {
  sessions: defineCollection({
    loader: courseNodeLoader("sessions"),
    schema: courseNodeSchema
      .extend({
        week: weekSchema,
        date: z.coerce.date(),
        teachers: teacherRefs.optional(),
      })
      .loose(),
  }),

  assessments: defineCollection({
    loader: courseNodeLoader("assessments"),
    // Each brief carries two illustrations rather than one: the grid card is
    // cropped to 16:9, the page hero is a wide band under a dark scrim, and a
    // drawing composed for one is cropped badly by the other. Alt text is
    // required alongside either, for the same reason `people` requires it of a
    // photo --- the pictures carry the scale escalation across the three
    // briefs, so they are content, not decoration.
    schema: ({ image }) =>
      courseNodeSchema
        .extend({
          week: weekSchema,
          due: z.coerce.date(),
          weight: z.coerce.number().positive().max(100),
          marking: z.discriminatedUnion("mode", [weightedMarking, holisticMarking]).optional(),
          heroImage: image().optional(),
          heroImageAlt: z.string().trim().min(1).optional(),
          cardImage: image().optional(),
          cardImageAlt: z.string().trim().min(1).optional(),
        })
        .loose()
        .superRefine((assessment, ctx) => {
          for (const [key, alt] of [
            ["heroImage", "heroImageAlt"],
            ["cardImage", "cardImageAlt"],
          ] as const) {
            if (assessment[key] && !assessment[alt]) {
              ctx.addIssue({
                code: "custom",
                path: [alt],
                message: `describe the ${key} when one is supplied`,
              });
            }
          }
        }),
  }),

  lectures: defineCollection({
    loader: courseNodeLoader("lectures"),
    schema: courseNodeSchema
      .extend({
        week: weekSchema,
        date: z.coerce.date(),
        teachers: teacherRefs.optional(),
        slides: z
          .string()
          .regex(/^\/decks\/[a-z0-9-]+\/$/)
          .optional(),
      })
      .loose(),
  }),

  people: defineCollection({
    loader: courseNodeLoader("people"),
    schema: ({ image }) =>
      z
        .object({
          title: z.string().trim().min(1),
          description: z.string().trim().min(40),
          role: z.string().trim().min(1),
          contact: z.string().trim().min(1).optional(),
          affiliation: z.string().trim().min(1).optional(),
          email: z.email().optional(),
          url: z.url().optional(),
          photo: image().optional(),
          photoAlt: z.string().trim().optional(),
          published: z.coerce.boolean().default(true),
        })
        .superRefine((person, ctx) => {
          if (person.photo && !person.photoAlt) {
            ctx.addIssue({
              code: "custom",
              path: ["photoAlt"],
              message: "describe the photo when one is supplied",
            });
          }
        }),
  }),
};
