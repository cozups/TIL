function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([37, 10, 8, 15, 27, 66, 32]));

function bubbleSortOptimized(arr) {
  for (let i = 0; i < arr.length; i++) {
    let noSwaps = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}
console.log(bubbleSortOptimized([37, 10, 8, 15, 27, 66, 32]));
