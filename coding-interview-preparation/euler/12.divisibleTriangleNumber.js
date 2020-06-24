/**
 @url https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-12-highly-divisible-triangular-number
 The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

1: 1

3: 1, 3

6: 1, 2, 3, 6

10: 1, 2, 5, 10

15: 1, 3, 5, 15

21: 1, 3, 7, 21

28: 1, 2, 4, 7, 14, 28

We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over n divisors?
*/

function getFactors(n) {
  const factors = new Set();

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.add(i);
      factors.add(n / i);
    }
  }

  return factors.size;
}

function divisibleTriangleNumber(n) {
  let triangleNumber = 1;
  for (let i = 2; i <= Infinity; i++) {
    if (getFactors(triangleNumber) > n) return triangleNumber;
    triangleNumber += i;
  }
}
// console.log(getFactors(16));

// console.log(divisibleTriangleNumber(5)) // number
// console.log(divisibleTriangleNumber(5)) // 28
// onsole.log(divisibleTriangleNumber(23)) // 630
// console.log(divisibleTriangleNumber(167)) // 1385280
// console.log(divisibleTriangleNumber(374)) // 17907120
// console.log(divisibleTriangleNumber(500)) // 76576500