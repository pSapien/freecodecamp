/**
  JavaScript Algorithms and Data Structures Projects: Caesars Cipher
  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

  Write a function which takes a ROT13 encoded string as input and returns a decoded string.

  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */
const SHIFTED = 13;
const STARTING_ASCII = 96;
const ENDING_ASCII = 122;
const TOTAL_ALPHABLETS_COUNT = 26;
const MID = STARTING_ASCII + (TOTAL_ALPHABLETS_COUNT / 2);

const isUpperCase = char => char.toUpperCase() === char;
const isAlphabet = char => char.match(/[A-Za-z]/);

function decode(char) {
  const charCode = char.toLowerCase().charCodeAt(0);
  let decodedCharCode = 0;
  if (charCode > MID) {
    const offsetRight = SHIFTED - (ENDING_ASCII - charCode);
    decodedCharCode = STARTING_ASCII + offsetRight;
  } else {
    decodedCharCode = charCode + SHIFTED;
  }
  const decodedChar = String.fromCharCode(decodedCharCode);
  return isUpperCase(char) ? decodedChar.toUpperCase() : char;
}

function rot13(str) {
  let res = '';

  for (let char of str) {
    res += isAlphabet(char) ? decode(char) : char;
  }

  return res;
}

console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR PBQR PNZC"));
