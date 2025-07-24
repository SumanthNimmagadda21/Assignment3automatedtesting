export default function calculateTotalCost(paintCost: number, laborCost: number): number {
  if (typeof paintCost !== 'number' || typeof laborCost !== 'number') {
    throw new Error("Invalid input: paintCost and laborCost must be numbers");
  }

  if (paintCost < 0 || laborCost < 0) {
    throw new Error("Invalid input: paintCost and laborCost must be non-negative");
  }

  return paintCost + laborCost;
}
