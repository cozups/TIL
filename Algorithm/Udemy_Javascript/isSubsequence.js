const inputs = [
  ['hello', 'hello world'],
  ['sing', 'sting'],
  ['abc', 'abracadabra'],
  ['abc', 'acb'],
];

const isSubsequence = (str1, str2) => {
  let left = 0;
  let right = 0;

  while (right < str2.length) {
    if (str1[left] === str2[right]) {
      left++;
    }
    right++;
  }

  if (left < str1.length) return false;

  return true;
};

inputs.forEach(([str1, str2]) => {
  console.log(isSubsequence(str1, str2));
});
