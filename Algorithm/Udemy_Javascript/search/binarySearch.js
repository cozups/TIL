function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] < target) {
      // right
      l = m + 1;
    } else if (arr[m] === target) {
      return m;
    } else {
      // left
      r = m - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
