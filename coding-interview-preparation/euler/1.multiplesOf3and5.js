/**
 * 
 * @url https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5
 * Project Euler: Problem 1: Multiples of 3 and 5Passed
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
 */


const isMultipleOf3or5 = v => v % 3 === 0 || v % 5 === 0;

function multiplesOf3and5(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (isMultipleOf3or5(i)) sum += i;
  }

  return sum;
}

