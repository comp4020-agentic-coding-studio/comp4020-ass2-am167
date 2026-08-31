import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The studio runs twelve teaching weeks on a fixed weekly rhythm, broken once
// by the two-week mid-semester break. That shape is easy to get wrong by hand
// and impossible to see from a single page, so it is asserted here: every week
// present exactly once, every lecture on its week's Monday, and the calendar
// interrupted in exactly one place, by exactly two weeks.
//
// Each week is a pair — a lecture and the studio that acts on it — so the two
// collections are checked against each other rather than each on its own. A
// week with a lecture and no studio is a week the course claims to teach and
// does not.

const TEACHING_WEEKS = 12;
const BREAK_AFTER_WEEK = 6;
const BREAK_WEEKS = 2;
const DAY_MS = 86_400_000;

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as {
  nodes: ApiNode[];
};

const scheduled = (type: string) =>
  api.nodes
    .filter((node) => node.type === type)
    .map((node) => ({
      id: node.id,
      week: Number(node.meta?.week),
      date: String(node.meta?.date).slice(0, 10),
    }))
    .sort((a, b) => a.week - b.week);

const lectures = scheduled("lectures");
const studios = scheduled("sessions");
const everyWeek = Array.from({ length: TEACHING_WEEKS }, (_, index) => index + 1);

const daysBetween = (from: string, to: string): number =>
  (Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / DAY_MS;

describe("teaching calendar", () => {
  it("runs a lecture in every teaching week, once each", () => {
    expect(lectures.map((lecture) => lecture.week)).toEqual(everyWeek);
  });

  it("pairs every lecture with the studio that acts on it, on the same day", () => {
    expect(studios.map((studio) => studio.week)).toEqual(everyWeek);
    for (const lecture of lectures) {
      const studio = studios.find((candidate) => candidate.week === lecture.week);
      expect(
        studio?.date,
        `week ${lecture.week}: ${lecture.id} is dated ${lecture.date}, its studio is not`,
      ).toBe(lecture.date);
    }
  });

  it("sits every teaching event on a Monday", () => {
    for (const { id, date } of [...lectures, ...studios]) {
      const day = new Date(`${date}T00:00:00Z`).getUTCDay();
      expect(day, `${id} falls on day ${day} of the week, not Monday`).toBe(1);
    }
  });

  it("breaks the weekly rhythm exactly once, for the mid-semester break", () => {
    const gaps = lectures.slice(1).map((lecture, index) => ({
      afterWeek: lectures[index].week,
      days: daysBetween(lectures[index].date, lecture.date),
    }));

    const interrupted = gaps.filter((gap) => gap.days !== 7);
    expect(
      interrupted.map((gap) => `week ${gap.afterWeek} → ${gap.days} days`),
    ).toEqual([`week ${BREAK_AFTER_WEEK} → ${(BREAK_WEEKS + 1) * 7} days`]);
  });
});
