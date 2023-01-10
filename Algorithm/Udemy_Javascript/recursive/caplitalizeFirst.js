function capitalizeFirst(arr) {
  let newArr = [];

  if (arr.length > 1) {
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
  }
  newArr.unshift(arr[0].substr(0, 1).toUpperCase() + arr[0].substr(1));

  return newArr;
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));

/* solution

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}
*/
