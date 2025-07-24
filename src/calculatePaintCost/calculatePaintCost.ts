export default function calculatePaintCost(paintRequired: number, costPerLiter: number): number {
  if (typeof paintRequired !== 'number' || typeof costPerLiter !== 'number') {
    throw new Error("Invalid input: paintRequired and costPerLiter must be numbers");
  }

  if (paintRequired < 0 || costPerLiter < 0) {
    throw new Error("Invalid input: paintRequired and costPerLiter must be non-negative");
  }

  return paintRequired * costPerLiter;
}
