/**
 * Method to generate letters between two letters
 * @param {string} start Start letter
 * @param {string} end End letter
 * @returns {string[]} Array of letters between start and end
 */
const generateLetters = (start: string, end: string) => 
    Array.from({ length: end.charCodeAt(0) - start.charCodeAt(0) + 1 }, 
               (_, i) => String.fromCharCode(start.charCodeAt(0) + i));

// Generate alphabet letters from A to Z
const alphabet = generateLetters('A', 'Z');

/**
 * Object with alphabet letters as keys and their values as values
 * @type {Record<string, number>}
 * @example
 * { A: 9, B: 18, C: 27, ... }
 */
export const alphabetValues = alphabet.reduce<Record<string, number>>((acc, letter, index) => {
  acc[letter] = (index + 1) * 9;
  return acc;
}, {});
