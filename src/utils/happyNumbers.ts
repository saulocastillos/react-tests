import { sumOfSquareOfDigits } from './base'

export const isAHappyNumber = (value: number) => {
  const track = []
  let result = false
  let final = false
  let square = sumOfSquareOfDigits(value)
  while (final === false) {
    if (square === 1) {
      result = true
      final = true
    } else if (track.includes(square)) {
      result = false
      final = true
    } else {
      track.push(square)
      const newSquare = square
      square = sumOfSquareOfDigits(newSquare)
    }
  }
  return result
}
