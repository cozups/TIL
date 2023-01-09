// const fs = require('fs');

// const input = fs.readFileSync('input.txt').toString().split('\r\n');

// const arr = input[0].split(' ').map((e) => +e);

// const num = +input[1];

const arr = [1, 4, 16, 22, 5, 7, 8, 9, 10];
const num = 95;

console.log(solution(arr, num));

function minSubArrayLen(arr, num) {
  let s = 0;
  let e = 0;
  let sum = arr[s];
  let answer = arr.length + 1;

  while (e < arr.length && s <= e) {
    // sum >= num => s++
    // sum < num => e++
    if (sum >= num) {
      answer = Math.min(answer, e - s + 1);
      sum -= arr[s];
      s++;
    } else {
      e++;
      sum += arr[e];
    }
  }

  return answer > arr.length ? 0 : answer;
}
