import calculateCanvasSize from "./calculateCanvasSize";
import paintRequiredCalculator from "./paintRequiredCalculator";

describe("Integration tests for main flow", () => {
  test("should calculate paint required correctly for valid inputs", () => {
    const area = calculateCanvasSize("10", "20");
    const coveragePerLiter = 11.4;
    const paintRequired = paintRequiredCalculator(area, coveragePerLiter);
    expect(paintRequired).toBeCloseTo(area / coveragePerLiter);
  });

  test("should throw error for invalid numeric strings in calculateCanvasSize", () => {
    expect(() => calculateCanvasSize("a", "20")).toThrow("Invalid input: length and width must be numeric strings");
  });

  test("should handle zero coveragePerLiter in paintRequiredCalculator", () => {
    const area = calculateCanvasSize("10", "20");
    expect(() => paintRequiredCalculator(area, 0)).toThrow();
  });

  test("should handle negative coveragePerLiter in paintRequiredCalculator", () => {
    const area = calculateCanvasSize("10", "20");
    expect(() => paintRequiredCalculator(area, -5)).toThrow();
  });

  test("should handle zero area in paintRequiredCalculator", () => {
    const area = calculateCanvasSize("0", "20");
    const coveragePerLiter = 11.4;
    const paintRequired = paintRequiredCalculator(area, coveragePerLiter);
    expect(paintRequired).toBe(0);
  });

  test("should handle large values correctly", () => {
    const area = calculateCanvasSize("1000000", "2000000");
    const coveragePerLiter = 11.4;
    const paintRequired = paintRequiredCalculator(area, coveragePerLiter);
    expect(paintRequired).toBeCloseTo(area / coveragePerLiter);
  });
});
