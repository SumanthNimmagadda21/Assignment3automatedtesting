export default function calculateCanvasDiagonal(
  length: string,
  width: string
): number {
  const lengthNum = parseFloat(length);
  const widthNum = parseFloat(width);

  if (isNaN(lengthNum) || isNaN(widthNum)) {
    throw new Error("Invalid input: length and width must be numeric strings");
  }

  if (lengthNum < 0 || widthNum < 0) {
    throw new Error("Invalid input: length and width must be non-negative");
  }

  return Math.sqrt(lengthNum * lengthNum + widthNum * widthNum);
}
