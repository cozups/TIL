function partition(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let pivotIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      [arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
    }
  }
  [arr[pivotIdx], arr[start]] = [arr[start], arr[pivotIdx]];

  return pivotIdx;
}

console.log(partition([4, 8, 2, 1, 5, 7, 6, 3]));
