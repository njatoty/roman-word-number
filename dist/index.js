import { alphabetValues } from "./utils";
/**
 * Method to calculate the value of a word
 * @param {string} word Word to calculate
 * @returns {number} Value of the word
 * @example
 * calculateWordValue('ABC') // 54
 */
export const calculateWordValue = (word) => word.split('').reduce((acc, letter) => acc + alphabetValues[letter], 0);
//# sourceMappingURL=index.js.map