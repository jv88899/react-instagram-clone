import { format, isThisYear } from "date-fns";

export function formatPostDate(date) {
  const formatShort = format(new Date(date), "MMMM d");
  const formatLong = format(new Date(date), "MMMM d yyy");

  return isThisYear(new Date(date)) ? formatShort : formatLong;
}
