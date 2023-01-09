function power(num, ex) {
  if (ex <= 0) {
    return 1;
  }
  return num * power(num, ex - 1);
}

console.log(power(2, 4));
