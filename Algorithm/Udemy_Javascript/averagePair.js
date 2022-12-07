const inputs = [
  {
    arr: [1, 2, 3],
    target: 2.5,
  },
  {
    arr: [1, 3, 3, 5, 6, 7, 10, 12, 19],
    target: 8,
  },
  {
    arr: [-1, 0, 3, 4, 5, 6],
    target: 4.1,
  },
  {
    arr: [],
    target: 4,
  },
];

const averagePair = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const avg = (arr[i] + arr[j]) / 2;

    if (avg > target) {
      j--;
    } else if (avg === target) {
      return true;
    } else {
      i++;
    }
  }

  return false;
};

inputs.forEach((input) => {
  console.log(averagePair(input.arr, input.target));
});
