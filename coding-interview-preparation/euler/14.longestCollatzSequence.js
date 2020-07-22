/**
 @url https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-14-longest-collatz-sequence
 The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)

n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above one million.
*/

function collatzChainLength(starting) {
  let prev = starting, chainLength = 0;

  while (true) {
    chainLength++;

    if (prev % 2 === 0) prev /= 2;
    else prev = (3 * prev) + 1;
    if (prev === 1) return chainLength;
  }
}

function longestCollatzSequence(limit) {
  let maxChainLenNum = 0, maxChainLen = 0;

  for (let i = 2; i < limit; i++) {
    let currentChainLen = collatzChainLength(i);
    if (collatzChainLength(i) > maxChainLen) {
      maxChainLen = currentChainLen;
      maxChainLenNum = i;
    }
  }

  return maxChainLenNum;
}

// console.log(longestCollatzSequence(14)) // number
// console.log(longestCollatzSequence(14)) // 9
// console.log(longestCollatzSequence(5847)) // 3711
// console.log(longestCollatzSequence(46500)) // 35655
// console.log(longestCollatzSequence(54512)) // 52527
// console.log(longestCollatzSequence(100000)) // 77031
// console.log(longestCollatzSequence(1000000)) // 837799