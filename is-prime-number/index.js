function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const number = 17;
const isNumberPrime = isPrime(number);
console.log(`${number} ${isNumberPrime ? "е" : "не е"} просто число`);