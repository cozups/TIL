const inputs = [
  [182, 281],
  [34, 14],
  [3589578, 5879385],
  [22, 222],
];

const sameFrequency = (num1, num2) => {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) {
    return false;
  }

  const frequency = {};

  for (let i = 0; i < num1.length; i++) {
    const char = num1.charAt(i);
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let i = 0; i < num2.length; i++) {
    const char = num2.charAt(i);
    if (!frequency[char]) {
      return false;
    } else {
      frequency[char]--;
    }
  }

  for (const key in frequency) {
    if (frequency[key] !== 0) {
      return false;
    }
  }

  return true;
};

inputs.forEach(([num1, num2]) => {
  console.log(sameFrequency(num1, num2));
});
