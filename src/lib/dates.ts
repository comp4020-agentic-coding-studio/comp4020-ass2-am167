const longDate = new Intl.DateTimeFormat("en-AU", {
  dateStyle: "long",
  timeZone: "UTC",
});

/** Format a date-only value without letting the viewer's timezone move it. */
export function formatCourseDate(value: Date | string): string {
  const date = typeof value === "string" ? new Date(`${value}T00:00:00Z`) : value;
  return longDate.format(date);
}

// A deadline is a room in Canberra at noon, not an event in the reader's
// timezone, so this one pins the zone rather than the formatter's default and
// names it in the output. `formatCourseDate` above stays UTC-on-a-date-only
// value, which is the right answer for the week dates the grids render.
const longDateTime = new Intl.DateTimeFormat("en-AU", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
});

/** Format an instant in the studio's own timezone, e.g. "15 March 2027 at 12:00 AEDT". */
export function formatCourseDateTime(value: Date | string): string {
  return longDateTime.format(typeof value === "string" ? new Date(value) : value);
}
