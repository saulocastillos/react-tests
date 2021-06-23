import {
  sumOfValues,
  isMultipleOf,
  isMultipleOfAllTargets,
  isMultipleOfAnyTargets,
  sumOfAllMultiplesBy,
  sumOfAnyMultiplesBy,
  sumOfOrTargertAndTargetsBy,
  isAHappyNumber,
  sumOfSquareOfDigits,
  equivalentNumberByLetter,
  sumLetterValuesInAWord,
  isPrime,
  isThisWordPrime,
  isThisWordHappy,
  isThisWordMultipleOf,
  isThisWordPrimeHappyMultiple,
} from "./index";

describe("testing base functions", () => {
  it("should sum all array values", () => {
    expect(sumOfValues([3, 5, 6, 9])).toBe(23);
  });
  it("should answer if a number is multiple of a target number", () => {
    expect(isMultipleOf(3, 9)).toBe(true);
  });
  it("should answer if a number is multiple of all target numbers", () => {
    expect(isMultipleOfAllTargets([3, 5], 15)).toBe(true);
    expect(isMultipleOfAllTargets([3, 4], 15)).toBe(false);
  });
  it("should answer if a number is multiple of any target numbers", () => {
    expect(isMultipleOfAnyTargets([3, 4], 15)).toBe(true);
    expect(isMultipleOfAnyTargets([0, 4], 15)).toBe(false);
  });
  it("should answer the sum of squares of digits", () => {
    expect(sumOfSquareOfDigits(7)).toBe(49);
    expect(sumOfSquareOfDigits(49)).toBe(97);
    expect(sumOfSquareOfDigits(97)).toBe(130);
    expect(sumOfSquareOfDigits(130)).toBe(10);
    expect(sumOfSquareOfDigits(10)).toBe(1);
  });
  it("should answer a number equivalent a letter", () => {
    expect(equivalentNumberByLetter("a")).toBe(1);
    expect(equivalentNumberByLetter("z")).toBe(26);
    expect(equivalentNumberByLetter("A")).toBe(27);
    expect(equivalentNumberByLetter("Z")).toBe(52);
  });
  it("should sum all letter values in a word", () => {
    expect(sumLetterValuesInAWord("abc")).toBe(6);
    expect(sumLetterValuesInAWord("abc12")).toBe(6);
    expect(sumLetterValuesInAWord("ab c12")).toBe(6);
    expect(sumLetterValuesInAWord("z")).toBe(26);
    expect(sumLetterValuesInAWord("A")).toBe(27);
    expect(sumLetterValuesInAWord("Z")).toBe(52);
  });
  it("should answer if a number is prime or not", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(73)).toBe(true);
    expect(isPrime(97)).toBe(true);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(75)).toBe(false);
    expect(isPrime(95)).toBe(false);
    expect(isPrime(117)).toBe(false);
  });
  it("should answer if a word is prime or not", () => {
    expect(isThisWordPrime("b")).toBe(true);
    expect(isThisWordPrime("abd")).toBe(true);
    expect(isThisWordPrime("a")).toBe(false);
    expect(isThisWordPrime("abc")).toBe(false);
  });
  it("should answer if a word is happy or not", () => {
    expect(isThisWordHappy("abc")).toBe(false);
    expect(isThisWordHappy("abd")).toBe(true);
  });
  it("should answer if a word is multiple of 3 or 5", () => {
    expect(isThisWordMultipleOf([3, 5], "abc")).toBe(true);
    expect(isThisWordMultipleOf([3, 5], "o")).toBe(true);
    expect(isThisWordMultipleOf([3, 5], "ab")).toBe(true);
    expect(isThisWordMultipleOf([3, 5], "aab")).toBe(false);
  });
});

describe("exercise 1", () => {
  it("should answer the sum of all natural numbers multiple of 3 or 5", () => {
    expect(sumOfAnyMultiplesBy([3, 5], 10)).toBe(23);
  });
  it("should answer the sum of all natural numbers multiple of 3 and 5", () => {
    expect(sumOfAllMultiplesBy([3, 5], 15)).toBe(15);
  });
  it("should sum all natural numbers multiply of (3 or 5) e 7", () => {
    expect(sumOfOrTargertAndTargetsBy([3, 5], [7], 30)).toBe(21);
    expect(sumOfOrTargertAndTargetsBy([3, 5], [7], 36)).toBe(56);
  });
});

describe("exercise 2", () => {
  it("should answer if a value is a happy number", () => {
    expect(isAHappyNumber(7)).toBe(true);
    expect(isAHappyNumber(10)).toBe(true);
    expect(isAHappyNumber(13)).toBe(true);
    expect(isAHappyNumber(19)).toBe(true);
    expect(isAHappyNumber(23)).toBe(true);
    expect(isAHappyNumber(28)).toBe(true);
    expect(isAHappyNumber(379)).toBe(true);
    expect(isAHappyNumber(496)).toBe(true);
    expect(isAHappyNumber(8)).toBe(false);
    expect(isAHappyNumber(11)).toBe(false);
    expect(isAHappyNumber(18)).toBe(false);
    expect(isAHappyNumber(21)).toBe(false);
    expect(isAHappyNumber(25)).toBe(false);
    expect(isAHappyNumber(26)).toBe(false);
    expect(isAHappyNumber(378)).toBe(false);
    expect(isAHappyNumber(493)).toBe(false);
  });
});

describe("exercise 3", () => {
  it("should answer if a word of words is prime, happy and multiple of 3 or 5", () => {
    expect(isThisWordPrimeHappyMultiple("abca")).toEqual({
      prime: true,
      happy: true,
      multipleOf3or5: false,
    });
    expect(isThisWordPrimeHappyMultiple("abb")).toEqual({
      prime: true,
      happy: false,
      multipleOf3or5: true,
    });
  });

  it("should answer if a group of words is prime, happy and multiple of 3 or 5", () => {
    const words = ["abca", "abb"];
    const result = words.map((word) => isThisWordPrimeHappyMultiple(word));

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          prime: true,
          happy: true,
          multipleOf3or5: false,
        }),
        expect.objectContaining({
          prime: true,
          happy: false,
          multipleOf3or5: true,
        }),
      ])
    );
  });
});
