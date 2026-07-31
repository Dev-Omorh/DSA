function largestEven(arr) {
  let largest = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestEven([2, 5, 8, 9, 12])); //12

function largestEven(arr) {
  let largest = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestEven([7, 9, 11])); //null
