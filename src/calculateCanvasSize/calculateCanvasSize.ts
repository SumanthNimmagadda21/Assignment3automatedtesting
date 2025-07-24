export default function calculateCanvasSize(
  length: string,
  width: string
): number {
  const lengthNum = parseInt(length);
  const widthNum = parseInt(width);

  if (isNaN(lengthNum) || isNaN(widthNum)) {
    throw new Error("Invalid input: length and width must be numeric strings");
  }

  if (lengthNum < 0 || widthNum < 0) {
    throw new Error("Invalid input: length and width must be non-negative");
  }

  return lengthNum * widthNum;
}
