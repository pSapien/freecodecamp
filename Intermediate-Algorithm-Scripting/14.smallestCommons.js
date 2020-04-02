/**
  Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

  The range will be an array of two numbers that will not necessarily be in numerical order.

  For example, if given 1 and 3, 
  find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
  The answer here would be 6.
 */

const isEven = v => v % 2 == 0;
const isOdd = v => !isEven(v);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return true;
}

function getRange(head, tail) {
  const res = [];
  for (let i = head; i <= tail; i++)
    res.push(i);
  return res;
}

function smallestCommons(arr) {
  const [first, last] = arr.sort((a, b) => a - b);
  const range = getRange(first, last);
  let smallestCommons = 1;

  for (let v of range) {
    if (isPrime(v)) {
      smallestCommons *= v;
      continue;
    }


  }

  return smallestCommons
}

// 1 x 2 x 3 x 4 x 5 = 120

console.log(smallestCommons([1, 5]));