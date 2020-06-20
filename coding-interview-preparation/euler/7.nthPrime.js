
  /** 
  @url https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-7-10001st-prime
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
  */

const primesCache = {}

function isPrime(n) {
  if (primesCache[n]) return primesCache[n];

  if (n !== 2 && n % 2 === 0) { 
    primesCache[n] = false;
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) { 
      primesCache[n] = false;
      return false;
    }
  }

  primesCache[n] = true;
  return true;
}

function nthPrime(n) {
  let nthPrimeCounter = 0, prime = 1 , start = 2;

  while (true) {
    if (nthPrimeCounter === n) return prime;

    if (isPrime(start)) {
      nthPrimeCounter++;
      prime = start;
    } 

    start++;
  }
}

console.log(nthPrime(6)) // number
console.log(nthPrime(6)) // 13
console.log(nthPrime(10)) // 29
console.log(nthPrime(100)) // 541
console.log(nthPrime(1000)) // 7919
console.log(nthPrime(10001)) // 104743