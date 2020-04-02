/**
 * Flatten a nested array. You must account for varying levels of nesting.
 */

function steamrollArray(arr) {
  const stack = [...arr];
  const res = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) stack.push(...next);
    else res.unshift(next);
  }

  return res;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));