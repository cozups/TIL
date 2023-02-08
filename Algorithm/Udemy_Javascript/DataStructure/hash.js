function hash(key, arrayLen) {
  let total = 0;
  // 소수를 이용하면 충돌 횟수를 줄이고 데이터가 더 퍼지게 할 수 있다.
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + WEIRD_PRIME + value) % arrayLen;
  }

  return total;
}

console.log(hash('pink', 10));
console.log(hash('cyan', 10));
console.log(hash('orangered', 10));
