const inputs = [
  [1, 1, 1, 1, 1, 2],
  [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13],
  [],
  [-2, -1, -1, 0, 1],
];

const countUniqueValues = (arr) => {
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
    }
  }

  return arr.length === 0 ? 0 : left + 1;
};

inputs.forEach((input) => {
  console.log(countUniqueValues(input));
});
