function naiveStringSearch(longStr, target) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (longStr[i + j] !== target[j]) {
        break;
      }
      if (j === target.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(naiveStringSearch('lorie loled', 'lol'));
