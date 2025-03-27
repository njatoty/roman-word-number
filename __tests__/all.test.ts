import { alphabet, roman } from "../src/index";

describe("Testing alphabet.ts", () => {
  it("should return 666 for lucifer with multiplier 9", () => {
    // set multiplier to 9
    alphabet.alphabetValue.setMultiplier(9);
    // calculate value of lucifer
    const value = alphabet.calculateWordValue("lucifer");
    expect(typeof value).toBe("number");
    expect(value).toBe(666);
  });

  it("should remove letters X, Y, Z", () => {
    // remove letters X, Y, Z
    alphabet.alphabetLetters.omit(["X", "Y", "Z"]);
    // get the new alphabet
    const newAlphabet = alphabet.alphabetLetters.get();
    // check if letters X, Y, Z are removed
    expect(newAlphabet).not.toContain("X");
    expect(newAlphabet).not.toContain("Y");
    expect(newAlphabet).not.toContain("Z");
    // check if A, B, C are still present
    expect(newAlphabet).toContain("A");
    expect(newAlphabet).toContain("B");
    expect(newAlphabet).toContain("C");
  });

  it("should return value of 2 for letter B if multiplier is 1", () => {
    // set multiplier to 1
    alphabet.alphabetValue.setMultiplier(1);
    // calculate value of letter B
    const value = alphabet.calculateWordValue("B");
    expect(typeof value).toBe("number");
    expect(value).toBe(2);

    // get letter B value directly from alphabetValue
    const BValue = alphabet.alphabetValue.getValues()["B"];
    expect(typeof BValue).toBe("number");
    expect(BValue).toBe(2);
  });
});

describe("Testing roman.ts", () => {
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
