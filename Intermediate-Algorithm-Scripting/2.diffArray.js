/**
  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
  Note: You can return the array with its elements in any order.
*/

function arrToDict(arr) { 
  const dict = {};
  arr.forEach(v => dict[v] = v);
  return dict;
}

function diffArray(arr1, arr2) { 
  const dict1 = arrToDict(arr1);
  const dict2 = arrToDict(arr2);
  const diff = [];

  arr1.forEach(elem1 => {
    if (!(elem1 in dict2)) diff.push(elem1); 
  });

  arr2.forEach(elem2 => {
    if (!(elem2 in dict1)) diff.push(elem2); 
  });

  return diff;
}