function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

const number = 5;
const factorial = calculateFactorial(number);
console.log(`Факториелът на ${number} е ${factorial}`);
