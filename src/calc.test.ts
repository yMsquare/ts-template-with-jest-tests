import { add } from "../src/calc";

describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });

  it("should return 5 for add(2,3)", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should handle negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
    expect(add(-2, 3)).toBe(1);
    expect(add(2, -3)).toBe(-1);
  });

  it("should handle zero", () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  it("should handle decimal numbers", () => {
    expect(add(1.5, 2.7)).toBeCloseTo(4.2);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
