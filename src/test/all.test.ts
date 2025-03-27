import { alphabetWordToNumber, roman } from "../index";

describe("alphabet", () => {
  it("should calculate the alphabed word value", () => {
    const value = alphabetWordToNumber("lucifer");
    expect(typeof value).toBe("number");
    expect(value).toBe(666);
  });
});

describe("roman", () => {
  it("should return 666 value if the word is VICARIUS FILII DEI", () => {
    const value = roman.romanNumeralToNumber("VICARIUS FILII DEI");
    expect(typeof value).toBe("number");
    expect(value).toBe(666);
  });

  it("should change the value of U to 10", () => {
    roman.numeral.updateRomanNumeral("U", 10);
    roman.transliterator.setTransliterator({});

    const value = roman.romanNumeralToNumber("U");

    expect(typeof value).toBe("number");
    expect(value).toBe(10);
  });
});
