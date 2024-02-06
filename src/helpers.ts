import { Responsive } from "./types";

export function getResponsiveNumber<T>(
  responsive: Responsive<T>,
  i: number
): number {
  const res = getResponsiveValue(responsive, i);
  return typeof res === "number" ? res : 0;
}

function getResponsiveValue<T>(
  responsive: Responsive<T>,
  i: number
): T | undefined | null {
  if (!responsive) {
    return null;
  }
  if (!Array.isArray(responsive)) {
    return responsive;
  }
  if (typeof responsive[i] === "undefined") {
    return responsive[responsive.length - 1];
  }
  return responsive[i];
}
