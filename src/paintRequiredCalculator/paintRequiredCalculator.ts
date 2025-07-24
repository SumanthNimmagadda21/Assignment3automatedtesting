export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  if (coveragePerLiter <= 0) {
    throw new Error("coveragePerLiter must be greater than zero");
  }
  return area / coveragePerLiter;
}
