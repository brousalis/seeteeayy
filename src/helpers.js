export function minutesUntil(start, end) {
  if (!(start instanceof Date)) {
    start = new Date(start);
  }
  end = new Date(end);
  const diff = end.getTime() - start.getTime();
  return Math.round(diff / 60000);
}
