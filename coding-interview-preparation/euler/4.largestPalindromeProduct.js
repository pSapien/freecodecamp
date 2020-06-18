/**
 * @url https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-4-largest-palindrome-product
  A palindromic number reads the same both ways. 
  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two n-digit numbers.
 */

function isPalindrome(number) {
  const strNum = String(number);

  const len = strNum.length, mid = len / 2;
  let start = 0, end = len - 1;

  while (start < mid) {
    if (strNum.charAt(start) !== strNum.charAt(end)) return false;
    start++;
    end--;
  }

  return true;
}

function getMultipliers(n) {
  const firstPlace = '9';
  const upperbound = firstPlace.repeat(n);

  let lowerbound = firstPlace;
  const numZeros = n - 1;
  if (numZeros > 1) lowerbound += '0'.repeat(numZeros - 1);
  lowerbound += 1;

  return [Number(lowerbound), Number(upperbound)];
}

function largestPalindromeProduct(n) {
  const [lowerbound, upperbound] = getMultipliers(n);
  let largestPalindrome = 1;

  for (let i = lowerbound; i <= upperbound; i++) {
    for (let j = lowerbound; j <= upperbound; j++) {
      const product = i * j;
      if (isPalindrome(product)) {
        largestPalindrome = product;
      }
    }
  }
  
  return largestPalindrome;
}

// console.log(largestPalindromeProduct(2));
// console.log(largestPalindromeProduct(3));