/**
 * 
 * Translate the provided string to pig latin.

  Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

  If a word begins with a vowel you just add "way" to the end.

    If a word does not contain a vowel, just add "ay" to the end.

  Input strings are guaranteed to be English words in all lowercase.
 */

const AY = 'ay';
const isVowel = letter => ['a', 'e', 'i', 'o', 'u'].includes(letter);

function translatePigLatin(str) {
  if (isVowel(str.charAt(0))) return str + 'w' + AY;

  const strArr = Array.from(str);
  const firstVowelIndex = strArr.findIndex(isVowel);

  if (firstVowelIndex > 0) {
    const beforeFirstVowel = strArr.slice(0, firstVowelIndex).join('');
    const afterFirstVowel = strArr.slice(firstVowelIndex).join('');

    return afterFirstVowel + beforeFirstVowel + AY;
  }

  return str + AY;
}

console.log(translatePigLatin('california'));
console.log(translatePigLatin("rhythm"));