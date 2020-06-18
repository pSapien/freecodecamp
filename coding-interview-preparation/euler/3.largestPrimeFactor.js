/**
 * @url https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor
  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the given number?
 */

function isPrime(number) {
  if (number % 2 === 0 && number !== 2) return false;

  for (let i = 3; i <= Math.sqrt(number) ; i += 2) {
    if (number % i === 0) return false;
  }

  return true;
}

function largestPrimeFactor(number) {
  if (isPrime(number)) return number;

  let largestPrime = 1;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0 && isPrime(i)) {
      largestPrime = i;
    }
  }
  return largestPrime;
}

console.log(largestPrimeFactor(13195));
// console.log(largestPrimeFactor(49));
// console.log(largestPrimeFactor(2));
// console.log(largestPrimeFactor(3));
console.log(largestPrimeFactor(600851475143));
// console.log(largestPrimeFactor(11))