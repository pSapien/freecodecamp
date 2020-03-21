/** Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

const isUpper = str => str.toUpperCase() === str;
const isAtoZ = str => str.match(/^[A-Za-z]+$/);
const isSpace = str => str === ' ';
const isHyphen = str => str === '-';

function spinalCase(str) {
  let [first, ...rest] = str;
  let res = first.toLowerCase();

  for (let i = 0; i < rest.length; i++) {
    const char = rest[i];
    const prevChar = rest[i - 1]; 

    if (isHyphen(char)) res += char;

    if (!isAtoZ(char)) continue;

    if (isUpper(char) || isSpace(prevChar)) {
      res += `-${char.toLowerCase()}`;
      continue;
    }

    res += char;
  }

  return res;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("Teletubbies say Eh-oh"));