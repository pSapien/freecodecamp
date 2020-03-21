/**
 * Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  const charCodes = Array.from(str).map(v => v.charCodeAt(0));

  for (let i = 0; i < charCodes.length - 1; i++) {
    const maybeNext = charCodes[i + 1];
    const nextShouldBe = charCodes[i] + 1; 

    if (maybeNext !== nextShouldBe) return String.fromCharCode(nextShouldBe);
  }

  return undefined
}

console.log(fearNotLetter("abce"))