const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

type RomanNumeralKey = keyof typeof romanNumerals;

class RomanNumeral {
  private numeral: typeof romanNumerals;

  constructor() {
    this.numeral = romanNumerals;
  }
  /**
   * Method to add a Roman numeral
   * @param letter
   * @param value
   * @returns {void}
   * @memberof RomanNumeral
   */
  public addRomanNumeral(letter: string, value: number): void {
    this.numeral[letter as RomanNumeralKey] = value;
  }

  /**
   * Method to update a Roman numeral
   * @param letter
   * @param value
   * @returns {void}
   * @memberof RomanNumeral
   */
  public updateRomanNumeral(letter: string, value: number): void {
    this.numeral[letter as RomanNumeralKey] = value;
  }

  /**
   * Method to set numeral
   * @param numeral numeral
   * @return {void}
   */
  public setNumeral(numeral: typeof romanNumerals): void {
    Object.assign(romanNumerals, numeral);
  }

  /**
   * Method to get numerals
   * @returns {typeof romanNumerals}
   */
  public getNumeral(): typeof romanNumerals {
    return this.numeral;
  }
}

class Transliterator {
  private mapping: Record<string, RomanNumeralKey>;

  constructor() {
    this.mapping = {
      U: "V",
    };
  }

  /**
   * Method to add a mapping
   * @param {string} letter Letter
   * @param {RomanNumeralKey} numeral Numeral
   */
  public addMapping(letter: string, numeral: RomanNumeralKey): void {
    this.mapping[letter] = numeral;
  }

  /**
   * Method to get mapping
   * @returns {Record<string, RomanNumeralKey>}
   */
  public getMapping(): Record<string, RomanNumeralKey> {
    return this.mapping;
  }

  /**
   * Method to set transliterator
   * @param {Record<string, RomanNumeralKey>} mapping Mapping
   * @returns {void}
   */
  public setTransliterator(mapping: Record<string, RomanNumeralKey>): void {
    this.mapping = mapping;
  }

  /**
   * Method to update transliterator
   * @param {string} letter Letter
   * @param {RomanNumeralKey} numeral Numeral
   * @returns {void}
   */
  public updateTransliterator(letter: string, numeral: RomanNumeralKey): void {
    this.mapping[letter] = numeral;
  }
}

export class Roman {
  public numeral: RomanNumeral;
  public transliterator: Transliterator;

  constructor() {
    this.numeral = new RomanNumeral();
    this.transliterator = new Transliterator();
  }

  /**
   * Method to convert Roman numerals to numbers
   * @param {string} roman Roman numeral
   * @returns {number} Number
   */
  public romanNumeralToNumber(roman: string): number {
    return roman
      .toUpperCase()
      .split("")
      .reduce((acc, numeral) => {
        // get exeptions and numerals
        const exeptions = this.transliterator.getMapping();
        const numerals = this.numeral.getNumeral();
        // get letter and current
        const letter = exeptions[numeral] || numeral;
        const current = numerals[letter] || 0;

        return acc + current;
      }, 0);
  }
}
