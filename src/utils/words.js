import { isPrime } from './base'
import { isAHappyNumber } from './happyNumbers'
import { isMultipleOfAnyTargets } from './multiples'

export const equivalentNumberByLetter = (value) => {
  const asciiNumber = value.charCodeAt(0)
  return asciiNumber > 96 ? asciiNumber - 96 : asciiNumber - 38
}

export const sumLetterValuesInAWord = (word) => {
  let result = 0
  const onlyLetters = word.replace(/[^a-z]+/gi, '').split('')
  onlyLetters.forEach((letter) => {
    result += equivalentNumberByLetter(letter)
  })
  return result
}

export const isThisWordPrime = (word) => {
  const sum = sumLetterValuesInAWord(word)
  return isPrime(sum)
}

export const isThisWordHappy = (word) => {
  const sum = sumLetterValuesInAWord(word)
  return isAHappyNumber(sum)
}

export const isThisWordMultipleOf = (target, word) => {
  const sum = sumLetterValuesInAWord(word)
  return isMultipleOfAnyTargets(target, sum)
}

export const isThisWordPrimeHappyMultiple = (word) => {
  return {
    prime: isThisWordPrime(word),
    happy: isThisWordHappy(word),
    multipleOf3or5: isThisWordMultipleOf([3, 5], word),
  }
}
