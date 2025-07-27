export function buildQueryString(params = {}) {
  const esc = encodeURIComponent;
  return Object.keys(params).length
    ? '?' +
        Object.entries(params)
          .map(([k, v]) => `${esc(k)}=${esc(v)}`)
          .join('&')
    : '';
}
export function getStringDate (date) {
  return new Date(date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
}