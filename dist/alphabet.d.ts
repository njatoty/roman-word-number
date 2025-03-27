declare class AlphabetValue {
    private alphabets;
    private multiplier;
    constructor(alphabets: string[]);
    /**
     * Method to get alphabet values
     * @returns {Record<string, number>}
     */
    get(): string[];
    /**
     * Method to set multiplier
     * @param {number} multiplier Multiplier
     */
    setMultiplier(multiplier: number): void;
    /**
     * Method to get alphabet values with multiplier
     * @returns {Record<string, number>}
     */
    getValues(): Record<string, number>;
}
declare class AlphabetLetter {
    private alphabetLetters;
    constructor();
    /**
     * Method to omit letters
     * @param {string[]} letters Letters to omit
     */
    omit(letters: string[]): void;
    /**
     * Method to get alphabet letters
     * @returns {string[]}
     */
    get(): string[];
}
export declare class Alphabet {
    alphabetLetters: AlphabetLetter;
    alphabetValue: AlphabetValue;
    constructor();
    /**
     * Method to calculate the value of a word
     * @param {string} word Word to calculate
     * @returns {number} Value of the word
     */
    calculateWordValue(word: string): number;
}
export {};
//# sourceMappingURL=alphabet.d.ts.map