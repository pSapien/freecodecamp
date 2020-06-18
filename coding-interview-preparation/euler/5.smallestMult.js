/**
 * @url https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-5-smallest-multiple
  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
 */

function getFactorial(n) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

function isDivisibleByNumberTo(maybeMultiple, number){
  for (let i = 2; i <= number; i++) {
    if (maybeMultiple % i !== 0) return false;
  }

  return true;
}

function smallestMult(n) {
  const halfFactorial = getFactorial(n);

  for (let i = 2; i <= halfFactorial; i++) {
    if (isDivisibleByNumberTo(i, n)) return i;
  }
}

console.log(smallestMult(5));
// console.log(smallestMult(7));