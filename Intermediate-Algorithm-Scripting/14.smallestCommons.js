/**
  Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

  The range will be an array of two numbers that will not necessarily be in numerical order.

  For example, if given 1 and 3,
  find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
  The answer here would be 6.
 */

function getRange(head, tail) {
  const res = [];
  for (let i = head; i <= tail; i++)
    res.push(i);
  return res;
}


function smallestCommons(arr) {
  const [first, last] = arr.sort((a, b) => a - b);
  const range = getRange(first, last);

  let startFrom = last + 1;
  while(true) {
    const isLcm = range.every(num => startFrom % num);
    if(isLcm) return startFrom;
    startFrom++;
  }

  return smallestCommons;
}

console.log(smallestCommons([1, 5]));