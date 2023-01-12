function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let length = 0;
  for (let elem of arr) {
    length = Math.max(digitCount(elem), length);
  }

  return length;
}

function radixSort(arr) {
  let times = mostDigits(arr);

  for (let i = 0; i < times; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
