/* recursive version O(2^n)
function fib(n) {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}
*/

/* memoization O(n) - Top down
function fib(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}
*/

// memoization - bottom up
function fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(fib(100));
