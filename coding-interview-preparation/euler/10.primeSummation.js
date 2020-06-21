/**
 @url https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-10-summation-of-primes
 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
*/

const primeCache = {}

function isPrime(n) {
  if (primeCache[n]) return primeCache[n];

  if (n !== 2 && n % 2 === 0) {
    primeCache[n] = false;
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      primeCache[n] = false;
      return false;
    }
  }

  primeCache[n] = true;
  return true;
}


function primeSummation(n) {
  let sumPrimes = 2;
  
  for (let i = 3; i < n; i++) {
    if (isPrime(i)) sumPrimes += i;
  }
  
  return sumPrimes;
}

// console.log(primeSummation(17)) // number
// console.log(primeSummation(17)) // 41
// console.log(primeSummation(2001)) // 277050
// console.log(primeSummation(140759)) // 873608362
// console.log(primeSummation(2000000)) // 142913828922