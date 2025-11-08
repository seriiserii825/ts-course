export function isRecord(v: unknown): v is Record<string, unknown> {
  // TODO: объект без null и не массив
  return typeof v === "object" && v !== null && !Array.isArray(v);
}
export function isNonEmptyString(x: unknown): x is string {
  // TODO: строка с .trim().length > 0
  return typeof x === "string" && x.trim().length > 0;
}
export function isPositiveNumber(x: unknown): x is number {
  // TODO: number finite > 0
  return typeof x === "number" && Number.isFinite(x) && x > 0;
}
export function isBoolean(x: unknown): x is boolean {
  return typeof x === "boolean";
}
