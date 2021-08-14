export const sumOfValues = (values: number[]) => {
  return values.reduce((curr, acc) => curr.valueOf() + acc.valueOf(), 0)
}

export const sumOfSquareOfDigits = (value: number) => {
  let result = 0
  const digits = value.toString().split('')
  digits.forEach((digit) => {
    result += Number(digit) * Number(digit)
  })
  return result
}

export const isPrime = (value: number) => {
  for (let i = 2; i < value; i++) {
    if (+value % i === 0) return false
  }
  return value > 1
}
