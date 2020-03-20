/**
 * 
 * You will be provided with an initial array (the first argument in the destroyer function), 
 * followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 */

function arrToDict(arr) { 
  const dict = {};
  arr.forEach(v => dict[v] = v);
  return dict;
}

function destroyer(arr, ...nums) { 
  const numDict = arrToDict(nums);
  return arr.filter(v => !(v in numDict));
}