function mergeArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let half = Math.floor(arr.length / 2);

  let leftArray = mergeSort(arr.slice(0, half));
  let rightArray = mergeSort(arr.slice(half));
  return mergeArray(leftArray, rightArray);
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
