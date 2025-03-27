class AlphabetGenerator {
  public static generate(start: string, end: string): string[] {
    return Array.from(
      { length: end.charCodeAt(0) - start.charCodeAt(0) + 1 },
      (_, i) => String.fromCharCode(start.charCodeAt(0) + i)
    );
  }
}

class AlphabetValue {
  private alphabets: string[];
  private multiplier: number = 9;

  constructor(alphabets: string[]) {
    this.multiplier = 9;
    this.alphabets = alphabets;
  }

  /**
   * Method to get alphabet values
   * @returns {Record<string, number>}
   */
  public get(): string[] {
    return this.alphabets;
  }

  /**
   * Method to set multiplier
   * @param {number} multiplier Multiplier
   */
  public setMultiplier(multiplier: number): void {
    this.multiplier = multiplier;
  }

  /**
   * Method to get alphabet values with multiplier
   * @returns {Record<string, number>}
   */
  public getValues(): Record<string, number> {
    return this.alphabets.reduce<Record<string, number>>(
      (acc, letter, index) => {
        acc[letter] = (index + 1) * this.multiplier;
        return acc;
      },
      {}
    );
  }
}

class AlphabetLetter {
  private alphabetLetters: string[];

  constructor() {
    this.alphabetLetters = AlphabetGenerator.generate("A", "Z");
  }

  /**
   * Method to omit letters
   * @param {string[]} letters Letters to omit
   */
  public omit(letters: string[]): void {
    this.alphabetLetters = this.alphabetLetters.filter(
      (letter) => !letters.includes(letter)
    );
  }

  /**
   * Method to get alphabet letters
   * @returns {string[]}
   */
  public get(): string[] {
    return this.alphabetLetters;
  }
}

export class Alphabet {
  public alphabetLetters: AlphabetLetter;
  public alphabetValue: AlphabetValue;

  constructor() {
    this.alphabetLetters = new AlphabetLetter();
    this.alphabetValue = new AlphabetValue(this.alphabetLetters.get());
  }

  /**
   * Method to calculate the value of a word
   * @param {string} word Word to calculate
   * @returns {number} Value of the word
   */
  public calculateWordValue(word: string): number {
    if (!word) {
      return 0;
    } else {
      return word
        .toUpperCase()
        .split("")
        .reduce(
          (acc, letter) => acc + this.alphabetValue.getValues()[letter],
          0
        );
    }
  }
}
