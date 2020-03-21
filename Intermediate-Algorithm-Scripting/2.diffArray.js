/**
  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
  Note: You can return the array with its elements in any order.
*/

function arrToDict(arr) { 
  const dict = {};
  arr.forEach(v => dict[v] = v);
  return dict;
}
const diff = (source, target) => source.filter(v => !(v in target));

const diffArray = (arr1, arr2) => ([
  ...diff(arr1, arrToDict(arr2)),
  ...diff(arr2, arrToDict(arr1)),
]);

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]