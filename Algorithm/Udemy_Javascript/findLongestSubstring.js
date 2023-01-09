const str = 'thisishowwedoit';

function findLongestSubstring(str) {
  if (str.length === 0) {
    return 0;
  }

  let letters = {};

  let [l, r] = [0, 1];
  letters[str.charAt(l)] = true;
  let answer = 0;
  while (r < str.length && l <= r) {
    if (letters[str.charAt(r)]) {
      delete letters[str.charAt(l)];
      l++;
    } else {
      letters[str.charAt(r)] = true;
      r++;
    }
    answer = Math.max(answer, r - l);
  }

  return answer;
}

console.log(findLongestSubstring(str));
