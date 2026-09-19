import { describe, expect, it } from "vitest";
import { countdownTo } from "../src/lib/countdown";

// The brief pages tick a live countdown to the artefact deadline. The clock
// itself is the one part of that widget with arithmetic in it, so it lives in
// src/lib and is tested here rather than being trapped inside a client script
// where the only way to find a decomposition bug is to watch the page at the
// wrong moment. The boundary cases are the ones that matter: a deadline is
// 12:00 sharp, and "0 seconds left" and "closed" are different states a
// reader would read very differently.

const DUE = "2027-03-15T12:00:00+11:00";
const dueMs = Date.parse(DUE);

describe("countdownTo", () => {
  it("decomposes the remaining time into days, hours, minutes and seconds", () => {
    const now = dueMs - ((2 * 24 + 3) * 60 * 60 + 4 * 60 + 5) * 1000;
    expect(countdownTo(DUE, now)).toEqual({
      status: "pending",
      parts: { days: 2, hours: 3, minutes: 4, seconds: 5 },
    });
  });

  it("counts days without capping them at a week or a month", () => {
    const now = dueMs - 177 * 24 * 60 * 60 * 1000;
    expect(countdownTo(DUE, now)).toEqual({
      status: "pending",
      parts: { days: 177, hours: 0, minutes: 0, seconds: 0 },
    });
  });

  it("still counts down one second before the deadline", () => {
    expect(countdownTo(DUE, dueMs - 1000)).toEqual({
      status: "pending",
      parts: { days: 0, hours: 0, minutes: 0, seconds: 1 },
    });
  });

  it("floors a part-second remainder instead of rounding it up", () => {
    expect(countdownTo(DUE, dueMs - 400)).toEqual({
      status: "pending",
      parts: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    });
  });

  it("is closed at the deadline instant, not one tick after it", () => {
    expect(countdownTo(DUE, dueMs)).toEqual({ status: "passed" });
  });

  it("stays closed once the deadline is behind us", () => {
    expect(countdownTo(DUE, dueMs + 5 * 24 * 60 * 60 * 1000)).toEqual({ status: "passed" });
  });

  it("accepts a Date for either side, as the content collection supplies one", () => {
    expect(countdownTo(new Date(dueMs), new Date(dueMs - 60_000))).toEqual({
      status: "pending",
      parts: { days: 0, hours: 0, minutes: 1, seconds: 0 },
    });
  });
});
