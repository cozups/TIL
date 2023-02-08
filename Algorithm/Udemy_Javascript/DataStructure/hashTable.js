class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let data of this.keyMap[index]) {
        if (data[0] === key) {
          return data[1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let [key, _] of this.keyMap[i]) {
          if (!keysArr.includes(key)) {
            keysArr.push(key);
          }
        }
      }
    }

    return keysArr;
  }

  values() {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let [_, value] of this.keyMap[i]) {
          if (!valuesArr.includes(value)) {
            valuesArr.push(value);
          }
        }
      }
    }

    return valuesArr;
  }
}

const ht = new HashTable();
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('plum', 'DOUBLE!!');
ht.set('purple', '#DDA0DD');
ht.set('violet', '#DDA0DD');
console.log(ht.keys());
console.log(ht.values());
console.log(ht.get('plum'));
