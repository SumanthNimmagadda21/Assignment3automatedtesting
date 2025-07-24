export default function convertAreaToSquareFeet(area: number): number {
  if (typeof area !== 'number') {
    throw new Error("Invalid input: area must be a number");
  }

  if (area < 0) {
    throw new Error("Invalid input: area must be non-negative");
  }

  const conversionFactor = 10.7639;
  return area * conversionFactor;
}
