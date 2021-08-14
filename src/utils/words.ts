import { isPrime } from './base'
import { isAHappyNumber } from './happyNumbers'
import { isMultipleOfAnyTargets } from './multiples'

export const equivalentNumberByLetter = (value: string) => {
  const asciinumber = value.charCodeAt(0)
  return asciinumber > 96 ? asciinumber - 96 : asciinumber - 38
}

export const sumLetterValuesInAWord = (word: string) => {
  let result = 0
  const onlyLetters = word.replace(/[^a-z]+/gi, '').split('')
  onlyLetters.forEach((letter) => {
    result += equivalentnumberByLetter(letter)
  })
  return result
}

export const isThisWordPrime = (word: string) => {
  const sum = sumLetterValuesInAWord(word)
  return isPrime(sum)
}

export const isThisWordHappy = (word: string) => {
  const sum = sumLetterValuesInAWord(word)
  return isAHappyNumber(sum)
}

export const isThisWordMultipleOf = (targets: number[], word: string) => {
  const sum = sumLetterValuesInAWord(word)
  return isMultipleOfAnyTargets(targets, sum)
}

export const isThisWordPrimeHappyMultiple = (word: string) => {
  return {
    prime: isThisWordPrime(word),
    happy: isThisWordHappy(word),
    multipleOf3or5: isThisWordMultipleOf([3, 5], word),
  }
}
