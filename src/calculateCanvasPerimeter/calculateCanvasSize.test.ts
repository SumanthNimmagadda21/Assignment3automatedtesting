import calculateCanvasPerimeter from "./calculateCanvasSize";

describe("calculateCanvasPerimeter", () => {
  test("returns correct perimeter", () => {
    const result = calculateCanvasPerimeter("10", "100");
    expect(result).toEqual(220);
  });

  test("throws error for non-numeric inputs", () => {
    expect(() => calculateCanvasPerimeter("a", "100")).toThrow("Invalid input: length and width must be numeric strings");
    expect(() => calculateCanvasPerimeter("10", "b")).toThrow("Invalid input: length and width must be numeric strings");
    expect(() => calculateCanvasPerimeter("a", "b")).toThrow("Invalid input: length and width must be numeric strings");
  });

  test("throws error for negative inputs", () => {
    expect(() => calculateCanvasPerimeter("-10", "100")).toThrow("Invalid input: length and width must be non-negative");
    expect(() => calculateCanvasPerimeter("10", "-100")).toThrow("Invalid input: length and width must be non-negative");
    expect(() => calculateCanvasPerimeter("-10", "-100")).toThrow("Invalid input: length and width must be non-negative");
  });
});
