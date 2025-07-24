export default function paintRequiredForMultipleCoats(area: number, coveragePerLiter: number, coats: number): number {
  if (coveragePerLiter <= 0 || coats <= 0) {
    throw new Error("coveragePerLiter and coats must be greater than zero");
  }
  return (area / coveragePerLiter) * coats;
}
