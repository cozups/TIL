const arr = [2, 3];
const len = 3;

const solution = (arr, len) => {
  if (len > arr.length) {
    return null;
  }

  let i = 0;
  let j = i + len;
  let sum = 0;
  for (let k = 0; k < j; k++) {
    sum += arr[k];
  }
  let maxSum = sum;

  while (j < arr.length) {
    sum -= arr[i++];
    sum += arr[j++];

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};

console.log(solution(arr, len));
