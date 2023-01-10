function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  let res = capitalizeWords(arr.slice(0, -1));
  let string = arr.slice(arr.length - 1)[0].toUpperCase();
  res.push(string);

  return res;
}

console.log(capitalizeWords(['car', 'taco', 'banana']));
