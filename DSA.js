function findSecondLargest(arr) {
  let secondLargest = null;

  for (let i = 0; i < arr.length; i++) {
    if (secondLargest === null || arr[i] > secondLargest) {
      largest = arr[i];
    }
  }
  return secondLargest;
}

console.log(findSecondLargest([4, 10, 6, 14, 8])); //10
