/**
  Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML     entities.
 */

const escapeMap = {
  '"': 'quot',
  '&': 'amp',
  '\'': '#x27',
  '<': 'lt',
  '>': 'gt',
  '`': '#x60',
  "'": 'apos',
}

const toHtmlEntity = char => escapeMap[char] ? `&${escapeMap[char]};` : char;

const convertHTML = (str) => str.split('').map(toHtmlEntity).join('');

console.log(convertHTML("Dolce & Gabbana"));
