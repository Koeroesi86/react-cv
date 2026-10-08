const currentPattern = /^(now|present|current)$/i;
const datePattern = /^(\d{4})(?:[ .-]+([A-Za-z]{3})[A-Za-z]*\.?)?$/;

const formatDate = (value: string): string => {
  const trimmed = value.trim();
  const [, year, month] = trimmed.match(datePattern) ?? [];

  if (currentPattern.test(trimmed)) return "Present";
  if (!year) return trimmed;

  return month ? `${month.charAt(0).toUpperCase()}${month.slice(1).toLowerCase()} ${year}` : year;
};

/** `2026 Jan.` and `now` become `Jan 2026 – Present`. */
const formatPeriod = (from: string | undefined, to: string): string =>
  [from, to]
    .filter((value): value is string => Boolean(value))
    .map(formatDate)
    .join(" – ");

export default formatPeriod;
