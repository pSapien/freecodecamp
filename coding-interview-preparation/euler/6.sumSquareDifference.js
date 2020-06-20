/** 
  @url https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-6-sum-square-difference
  The sum of the squares of the first ten natural numbers is,

  12 + 22 + ... + 102 = 385

  The square of the sum of the first ten natural numbers is,

  (1 + 2 + ... + 10)2 = 552 = 3025

  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

  Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

const arithmeticSum = (n) => (n / 2) * (n + 1);
const arithmeticSumSquareSum = (n) => (n * (n + 1) * (2 * n + 1)) / 6;

function sumSquareDifference(n) {
  return Math.pow(arithmeticSum(n), 2) - arithmeticSumSquareSum(n);
}

console.log(sumSquareDifference(10)) // number
console.log(sumSquareDifference(10)) // 2640
console.log(sumSquareDifference(20)) // 41230
console.log(sumSquareDifference(100)) // 25164150
