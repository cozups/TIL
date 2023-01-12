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

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = partition(arr, left, right);

    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
