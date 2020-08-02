/**
 @url https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
 Return true if the passed string looks like a valid US phone number.

  The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555

  For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

/**
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
 */

const isSpace = (str) => str === ' ';
const isLetter = (char) => char.toLowerCase() != char.toUpperCase();
const isNumber = num => Number(num) < 10;
const isRubbishChar = (char) => ['#', '*', '!', '#', '?'].includes(char);

function removeBracketsIfValidOtherwiseFalse(number) {
  const BRACKET_REGEX = /[()]/g;
  let brackets = 0;
  
  const lastChar = number[number.length - 1]; 
  if (lastChar === ')') return false;

  number = number.replace(BRACKET_REGEX, (char) => {
    if (char === '(') brackets++;
    if (char === ')') brackets--;
    return '';
  });

  if (brackets !== 0) return false;
  return number;
}

function telephoneCheck(telephoneNum) {
  telephoneNum = removeBracketsIfValidOtherwiseFalse(telephoneNum);

  if (!telephoneNum) return false;
  
  const AREA_CODE = 1;
  if (telephoneNum[0] != AREA_CODE) telephoneNum = AREA_CODE + telephoneNum;
  
  let phoneDigitsCount = 0;
  
  for (const telNum of telephoneNum) {
    if (isSpace(telNum)) continue;
    if (isRubbishChar(telNum) || isLetter(telNum)) return false;

    if (isNumber(telNum)) phoneDigitsCount++;
  }

  const PHONE_DIGIT_LIMIT = 11;
  if (phoneDigitsCount !== PHONE_DIGIT_LIMIT) return false;

  return true;
}

// console.log(telephoneCheck("5555-5555-5555"));
// console.log(telephoneCheck('(555)555-5555'));
// console.log(telephoneCheck('1 555-555-5555'))
console.log(telephoneCheck('(6054756961)'));
