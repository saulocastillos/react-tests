export const sumOfValues = (values) => {
  return values.reduce((curr, acc) => curr + acc, 0);
};

export const sumOfSquareOfDigits = (value) => {
  let result = 0;
  const digits = value.toString().split("");
  digits.forEach((digit) => {
    result = result + Number(digit) * Number(digit);
  });
  return result;
};

export const isPrime = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) return false;
  }
  return value > 1;
};
