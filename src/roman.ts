const romanNumerals: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

/**
 * Method to convert Roman numerals to numbers
 * @param {string} roman Roman numeral
 * @returns {number} Number
 */
export const romanToNumber = (roman: string): number => {
    return roman.split('').reduce((acc, numeral, index, arr) => {
        const current = romanNumerals[numeral];
        const next = romanNumerals[arr[index + 1]] || 0;
        return current < next ? acc - current : acc + current;
    }, 0);
}