export const sumOfValues = (values: Number[]) => {
  return values.reduce((curr, acc) => curr.valueOf() + acc.valueOf(), 0)
}

export const sumOfSquareOfDigits = (value: Number) => {
  let result = 0
  const digits = value.toString().split('')
  digits.forEach((digit) => {
    result += Number(digit) * Number(digit)
  })
  return result
}

export const isPrime = (value: Number) => {
  for (let i = 2; i < value; i++) {
    if (+value % i === 0) return false
  }
  return value > 1
}
