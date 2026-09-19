// The clock behind the brief pages' live countdown to an artefact deadline.
// Kept framework-free (no astro:content imports) so it's directly
// unit-testable — see spec/countdown.test.ts — and so the same function runs
// on the server, where nothing renders it, and in the browser, where the
// ticking happens.

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export type CountdownState =
  | { status: "pending"; parts: CountdownParts }
  | { status: "passed" };

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/**
 * How long is left until `due`, decomposed for display.
 *
 * The deadline instant itself is already `passed`: the studio's artefact clock
 * stops *at* 12:00, so a page reading "0 seconds" at 12:00:00 would be
 * claiming a door is open that the policies page says is shut. Days are
 * uncapped — the first brief is months out, and "177" is the honest figure.
 */
export function countdownTo(
  due: Date | string | number,
  now: Date | number,
): CountdownState {
  const target = typeof due === "string" ? Date.parse(due) : Number(due);
  const remaining = target - Number(now);
  if (!Number.isFinite(remaining) || remaining <= 0) return { status: "passed" };
  return {
    status: "pending",
    parts: {
      days: Math.floor(remaining / DAY),
      hours: Math.floor((remaining % DAY) / HOUR),
      minutes: Math.floor((remaining % HOUR) / MINUTE),
      seconds: Math.floor((remaining % MINUTE) / SECOND),
    },
  };
}
