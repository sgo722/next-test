export function convertStringToDate(date?: string) {
  if (!date) {
    return "";
  }
  return new Date(date).toLocaleString();
}
