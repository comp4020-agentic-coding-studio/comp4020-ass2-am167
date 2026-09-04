// Pure data mapping for the home page's semester-at-a-glance widget. Kept
// framework-free (no astro:content imports) so it's directly unit-testable —
// see spec/semester-timeline.test.ts. Produces a single ordered list of
// cells (weeks, the mid-semester break, enrolment-date markers) so the Astro
// component only has to render them in sequence.

export interface WeekDate {
  week: number;
  date: Date | string;
}

function toUtc(date: Date | string): number {
  return typeof date === "string" ? Date.parse(`${date}T00:00:00Z`) : date.getTime();
}

/**
 * Which teaching week a calendar date falls after, given each week's Monday.
 * Used to place an enrolment date (the fact that's actually published) on
 * the week-numbered timeline without hand-maintaining a duplicate week
 * number next to it.
 */
export function weekBoundaryFor(markerDate: Date | string, weekDates: WeekDate[]): number {
  const target = toUtc(markerDate);
  let after = 0;
  for (const { week, date } of [...weekDates].sort((a, b) => a.week - b.week)) {
    if (toUtc(date) <= target) after = week;
  }
  return after;
}

export interface TimelineAssessment {
  week: number;
  weight: number;
}

export interface TimelineMarker {
  label: string;
  afterWeek: number;
}

export type TimelineCell =
  | {
      kind: "week";
      week: number;
      hasLecture: boolean;
      hasStudio: boolean;
      assessment?: { shortLabel: string; weight: number };
    }
  | { kind: "break"; weeks: number }
  | { kind: "marker"; label: string };

export function buildSemesterTimeline(params: {
  totalWeeks: number;
  breakAfterWeek: number;
  breakWeeks: number;
  lectureWeeks: number[];
  studioWeeks: number[];
  assessments: TimelineAssessment[];
  markers: TimelineMarker[];
}): TimelineCell[] {
  const lectureWeeks = new Set(params.lectureWeeks);
  const studioWeeks = new Set(params.studioWeeks);
  const assessmentByWeek = new Map(
    [...params.assessments]
      .sort((a, b) => a.week - b.week)
      .map((assessment, index) => [
        assessment.week,
        { shortLabel: `A${index + 1}`, weight: assessment.weight },
      ]),
  );
  const markersByWeek = new Map<number, TimelineMarker[]>();
  for (const marker of params.markers) {
    const existing = markersByWeek.get(marker.afterWeek) ?? [];
    existing.push(marker);
    markersByWeek.set(marker.afterWeek, existing);
  }

  const cells: TimelineCell[] = [];
  for (let week = 1; week <= params.totalWeeks; week++) {
    cells.push({
      kind: "week",
      week,
      hasLecture: lectureWeeks.has(week),
      hasStudio: studioWeeks.has(week),
      assessment: assessmentByWeek.get(week),
    });
    if (week === params.breakAfterWeek) {
      cells.push({ kind: "break", weeks: params.breakWeeks });
    }
    for (const marker of markersByWeek.get(week) ?? []) {
      cells.push({ kind: "marker", label: marker.label });
    }
  }

  return cells;
}
