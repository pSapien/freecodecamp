/**
 * 
  Perform a search and replace on the sentence using the arguments provided and return the new sentence.

  First argument is the sentence to perform the search and replace on.
  Second argument is the word that you will be replacing (before).
  Third argument is what you will be replacing the second argument with (after).

  Note
  Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 */

const isUpper = str => str.toUpperCase() === str;
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

function makeCaseSame(source, target) {
  const sourceFirstLeter = source.charAt(0);
  return isUpper(sourceFirstLeter)
    ? capitalize(target)
    : target;
}

function myReplace(str, before, after) {
  return str.split(' ').map(word => {
    return (word === before)
      ? makeCaseSame(before, after)
      : word
  }).join(' ');
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
)