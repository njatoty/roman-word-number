import { alphabetWordToNumber, romanWordToNumber } from "../index";

describe("alphabet", () => {
    it("should calculate the alphabed word value", () => {
        const value = alphabetWordToNumber("lucifer");
        expect(typeof value).toBe("number");
        expect(value).toBe(666);
    });
});

describe("roman", () => {
    it("should calculate the roman word value", () => {
        const value = romanWordToNumber("VICARIUS FILII DEI");
        expect((typeof value)).toBe("number");
        expect(value).toBe(666);
    });
});