const examples = [
  ['', ''],
  ['aaz', 'zza'],
  ['anagram', 'nagaram'],
  ['rat', 'car'],
  ['awesome', 'awesom'],
  ['amanaplanacanalpanama', 'acanalmanplanpamana'],
  ['qwerty', 'qeywrt'],
  ['texttwisttime', 'timetwisttext'],
];
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequency1 = {};
  const frequency2 = {};

  for (let char of str1) {
    frequency1[char] = (frequency1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }

  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true;
};

examples.forEach(([str1, str2]) => {
  console.log(validAnagram(str1, str2));
});
