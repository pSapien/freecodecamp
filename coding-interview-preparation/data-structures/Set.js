class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.keys(this.dictionary);
  }

  add(element) {
    if (this.has(element)) return false;
    
    this.dictionary[element] = true;
    this.length++;
    return true;
  }
   
  remove(element) {
    if (this.has(element)) { 
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
}
