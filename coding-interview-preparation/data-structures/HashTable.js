let called = 0;
function hash(string) {
  called++;
  var hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

const getKey = item => item[0];
const getValue = item => item[1];

class HashTable {
  constructor() {
    this.collection = {};
  }

  add(key, value) {
    const _hash = hash(key);

    if (this.collection[_hash]) {
      const valuePresent = this.collection[_hash].some(item => getKey(item) === key && getValue(key) === value);
      if (valuePresent) return;
    }
    
    if (!this.collection[_hash]) this.collection[_hash] = [];
    this.collection[_hash].push([key, value]);
  }

  remove(key) {
    const _hash = hash(key);
    if (!this.collection[_hash]) return null;
    if (this.collection[_hash].length > 1) {
      this.collection[_hash] = [...this.collection[_hash].filter(item => getKey(item) !== key)];
    } else {
      delete this.collection[_hash];
    }
  }

  lookup(key) {
    const _hash = hash(key);
    if (!this.collection[_hash]) return null;
    const item = this.collection[_hash].find(item => getKey(item) === key);
    return getValue(item);
  }
}

const HT = new HashTable();
HT.add('key', 'value');
HT.add('key1', 'value1');
HT.add('key2', 'value2');
HT.add('key3', 'value3'); 
HT.add('key1', 'value1');
HT.add('1key', 'value2');
HT.add('ke1y', 'value3');
console.log(HT.collection);
HT.remove('key');
console.log(HT.collection);
console.log(HT.lookup('key'));
console.log(HT.lookup('key1'));



