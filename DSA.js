 function findLargest(arr) {
    let largest = 0;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}
console.log(findLargest([2,3,5,6,9])); //9

 function findSmallest(arr) {
    let smallest = 0;

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;}
    console.log(findLargest([2,3,5,6,9])); //2

 function findSum(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }

    return sum;
}

console.log(findSum([2,3,5,1])); //11

function countEven(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0){
            count++;
        }
    }
    return count;
}

console.log(countEven([2,6,4,1,3,9,0])); //4

function findSecondLargest(arr) {
    let largest = null;
    let secondLargest = null; 

    for(let i = 0; i < arr.length; i++){
    
    if (largest === null || arr[i] > argest) {
        secondLargest = largest;
        largest = arr[i];
        }
     else (arr[i] > secondLargest ) {
        secondLargest = arr[i];
    } }
    return secondLargest;
}
console.log(countEven([2,6,4,1,3,9,0])); //6