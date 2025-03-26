import { alphabetValues } from "./utils";

/**
 * Method to calculate the value of a word
 * @param {string} word Word to calculate
 * @returns {number} Value of the word
 * @example
 * calculateWordValue('ABC') // 54
 */
export const alphabetWordToNumber = (word: string): number => {
    if (!word) {
        return 0;
    } else {
        return word
            .toUpperCase()
            .split('')
            .reduce((acc, letter) => acc + alphabetValues[letter], 0);
    }
}
