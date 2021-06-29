import { isPrime } from './base'
import { isAHappyNumber } from './happyNumbers'
import { isMultipleOfAnyTargets } from './multiples'

export const equivalentNumberByLetter = (value: String) => {
  const asciiNumber = value.charCodeAt(0)
  return asciiNumber > 96 ? asciiNumber - 96 : asciiNumber - 38
}

export const sumLetterValuesInAWord = (word: String) => {
  let result = 0
  const onlyLetters = word.replace(/[^a-z]+/gi, '').split('')
  onlyLetters.forEach((letter) => {
    result += equivalentNumberByLetter(letter)
  })
  return result
}

export const isThisWordPrime = (word: String) => {
  const sum = sumLetterValuesInAWord(word)
  return isPrime(sum)
}

export const isThisWordHappy = (word: String) => {
  const sum = sumLetterValuesInAWord(word)
  return isAHappyNumber(sum)
}

export const isThisWordMultipleOf = (targets: Number[], word: String) => {
  const sum = sumLetterValuesInAWord(word)
  return isMultipleOfAnyTargets(targets, sum)
}

export const isThisWordPrimeHappyMultiple = (word: String) => {
  return {
    prime: isThisWordPrime(word),
    happy: isThisWordHappy(word),
    multipleOf3or5: isThisWordMultipleOf([3, 5], word),
  }
}
