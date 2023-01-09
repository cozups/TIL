function isPalindrome(str) {
  if (str.length === 0) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substr(1, str.length - 2));
  }
  return false;
}

console.log(isPalindrome('amanaplanacanalpandemonium'));
