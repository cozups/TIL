// 배열에서 최소값의 인덱스를 찾아서 매 단계의 첫번째 요소와 스왑하는 알고리즘
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let noSwaps = true;
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
      noSwaps = false;
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(selectionSort([27, 11, 87, 21, 5, 9, 16]));
