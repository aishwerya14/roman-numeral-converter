const convertToRoman = require("../services/converter");

describe("Roman Numeral Converter", () => {
  test("Converts 1 to I", () => {
    expect(convertToRoman(1)).toBe("I");
  });

  test("Converts 3999 to MMMCMXCIX", () => {
    expect(convertToRoman(3999)).toBe("MMMCMXCIX");
  });

  test("Handles non-numeric input by returning an empty string", () => {
    expect(convertToRoman("abc")).toBe("");
  });

  test("Handles out-of-range input (number less than 1) by returning an error object", () => {
    expect(convertToRoman(0)).toEqual({ error: "Number out of range (1-3999)" });
  });

  test("Handles out-of-range input (number greater than 3999) by returning an error object", () => {
    expect(convertToRoman(4000)).toEqual({ error: "Number out of range (1-3999)" });
  });
});
