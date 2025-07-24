export default function estimatePaintingTime(area: number, paintingSpeed: number): number {
  if (typeof area !== 'number' || typeof paintingSpeed !== 'number') {
    throw new Error("Invalid input: area and paintingSpeed must be numbers");
  }

  if (area < 0 || paintingSpeed <= 0) {
    throw new Error("Invalid input: area must be non-negative and paintingSpeed must be positive");
  }

  return area / paintingSpeed;
}
