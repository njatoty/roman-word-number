declare const romanNumerals: {
    I: number;
    V: number;
    X: number;
    L: number;
    C: number;
    D: number;
    M: number;
};
type RomanNumeralKey = keyof typeof romanNumerals;
declare class RomanNumeral {
    private numeral;
    constructor();
    /**
     * Method to add a Roman numeral
     * @param letter
     * @param value
     * @returns {void}
     */
    addRomanNumeral(letter: string, value: number): void;
    /**
     * Method to update a Roman numeral
     * @param letter
     * @param value
     * @returns {void}
     * @memberof RomanNumeral
     */
    updateRomanNumeral(letter: string, value: number): void;
    /**
     * Method to set numeral
     * @param numeral numeral
     * @return {void}
     */
    setNumeral(numeral: typeof romanNumerals): void;
    /**
     * Method to get numerals
     * @returns {typeof romanNumerals}
     */
    getNumeral(): typeof romanNumerals;
}
declare class Transliterator {
    private mapping;
    constructor();
    /**
     * Method to add a mapping
     * @param {string} letter Letter
     * @param {RomanNumeralKey} numeral Numeral
     */
    addMapping(letter: string, numeral: RomanNumeralKey): void;
    /**
     * Method to get mapping
     * @returns {Record<string, RomanNumeralKey>}
     */
    getMapping(): Record<string, RomanNumeralKey>;
    /**
     * Method to set transliterator
     * @param {Record<string, RomanNumeralKey>} mapping Mapping
     * @returns {void}
     */
    setTransliterator(mapping: Record<string, RomanNumeralKey>): void;
    /**
     * Method to update transliterator
     * @param {string} letter Letter
     * @param {RomanNumeralKey} numeral Numeral
     * @returns {void}
     */
    updateTransliterator(letter: string, numeral: RomanNumeralKey): void;
}
export declare class Roman {
    numeral: RomanNumeral;
    transliterator: Transliterator;
    constructor();
    /**
     * Method to convert Roman numerals to numbers
     * @param {string} roman Roman word
     * @returns {number} Number
     */
    romanNumeralToNumber(roman: string): number;
}
export {};
//# sourceMappingURL=roman.d.ts.map