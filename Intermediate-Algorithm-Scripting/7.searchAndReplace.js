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
const firstLetterOf = str => str.charAt(0);
const capitalize = str => firstLetterOf(str).toUpperCase() + str.slice(1);
const makeCaseSame = (source, target) => isUpper(firstLetterOf(source)) ? capitalize(target) : target;

const myReplace = (str, before, after) =>
  str
    .split(' ')
    .map(word => (word === before) ? makeCaseSame(before, after) : word)
    .join(' ');

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
)