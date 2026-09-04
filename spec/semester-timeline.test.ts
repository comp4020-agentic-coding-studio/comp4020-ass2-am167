import { describe, expect, it } from "vitest";
import { buildSemesterTimeline, weekBoundaryFor } from "../src/lib/semester-timeline";

// The home page's semester-at-a-glance widget is a non-trivial data mapping —
// it turns three separate content collections plus two calendar dates into
// one ordered list of cells (weeks, the break, enrolment markers) for the
// component to render in sequence. This is that mapping, tested on its own
// (no Astro build needed) so it's easy to get the interleaving order wrong
// without a test noticing.

describe("weekBoundaryFor", () => {
  const weekDates = [
    { week: 1, date: "2027-02-22" },
    { week: 2, date: "2027-03-01" },
    { week: 3, date: "2027-03-08" },
    { week: 4, date: "2027-03-15" },
  ];

  it("places a date after the last week whose Monday it falls on or after", () => {
    expect(weekBoundaryFor("2027-03-12", weekDates)).toBe(3);
  });

  it("places a date exactly on a week's Monday after that week starts", () => {
    expect(weekBoundaryFor("2027-03-08", weekDates)).toBe(3);
  });

  it("returns 0 for a date before the first week", () => {
    expect(weekBoundaryFor("2027-01-01", weekDates)).toBe(0);
  });
});

describe("buildSemesterTimeline", () => {
  const base = {
    totalWeeks: 12,
    breakAfterWeek: 6,
    breakWeeks: 2,
    lectureWeeks: Array.from({ length: 12 }, (_, i) => i + 1),
    studioWeeks: Array.from({ length: 12 }, (_, i) => i + 1),
    assessments: [
      { week: 4, weight: 25 },
      { week: 9, weight: 25 },
      { week: 12, weight: 50 },
    ],
    markers: [
      { label: "census date", afterWeek: 3 },
      { label: "last day to drop", afterWeek: 8 },
    ],
  };

  it("produces one cell per teaching week, each with a lecture and a studio", () => {
    const cells = buildSemesterTimeline(base);
    const weeks = cells.filter((cell) => cell.kind === "week");
    expect(weeks).toHaveLength(12);
    expect(weeks.every((week) => week.hasLecture && week.hasStudio)).toBe(true);
  });

  it("labels assessment weeks in week order regardless of input order", () => {
    const shuffled = { ...base, assessments: [...base.assessments].reverse() };
    const cells = buildSemesterTimeline(shuffled);
    const labelled = cells
      .filter((cell) => cell.kind === "week" && cell.assessment)
      .map((cell) => cell.kind === "week" && [cell.week, cell.assessment?.shortLabel, cell.assessment?.weight]);
    expect(labelled).toEqual([
      [4, "A1", 25],
      [9, "A2", 25],
      [12, "A3", 50],
    ]);
  });

  it("inserts the break cell immediately after the week it follows", () => {
    const cells = buildSemesterTimeline(base);
    const breakIndex = cells.findIndex((cell) => cell.kind === "break");
    expect(cells[breakIndex - 1]).toMatchObject({ kind: "week", week: 6 });
    expect(cells[breakIndex + 1]).toMatchObject({ kind: "week", week: 7 });
    expect(cells[breakIndex]).toMatchObject({ kind: "break", weeks: 2 });
  });

  it("inserts each marker immediately after the week it falls after, in order", () => {
    const cells = buildSemesterTimeline(base);
    const kinds = cells.map((cell) => (cell.kind === "week" ? `week ${cell.week}` : cell.kind));
    expect(kinds).toEqual([
      "week 1",
      "week 2",
      "week 3",
      "marker",
      "week 4",
      "week 5",
      "week 6",
      "break",
      "week 7",
      "week 8",
      "marker",
      "week 9",
      "week 10",
      "week 11",
      "week 12",
    ]);
    const markerLabels = cells.filter((cell) => cell.kind === "marker").map((cell) => cell.kind === "marker" && cell.label);
    expect(markerLabels).toEqual(["census date", "last day to drop"]);
  });

  it("leaves a week's assessment undefined when nothing is due that week", () => {
    const cells = buildSemesterTimeline(base);
    const week1 = cells.find((cell) => cell.kind === "week" && cell.week === 1);
    expect(week1).toMatchObject({ assessment: undefined });
  });
});
