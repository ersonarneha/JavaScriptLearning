const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
console.log(`---Total elements available-----`);
var arrayOfNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var arrayTotal = arrayOfNumbers.length;
console.log(`Total elements available in array:${arrayTotal}`);

console.log(
  `First element:${arrayNumbers[0]} and last element:${
    arrayNumbers[arrayNumbers.length - 1]
  }`
);

console.log(
  `Third last element in array:${arrayNumbers[arrayNumbers.length - 3]}`
);

console.log(`-----------Even Numbers in array------`);
var tempArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (arrayNumbers[index] % 2 == 0) {
    tempArray.push(arrayNumbers[index]);
  }
}
console.log(`Even numbers in array:${tempArray}`);
console.log(`-----------odd Numbers in array------`);
var tempArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (arrayNumbers[index] % 2 !== 0) {
    tempArray.push(arrayNumbers[index]);
   
  }
}
console.log(`Odd numbers in array:${tempArray}`);
console.log(`-----------Even Number positioned elements in array ------`);
var tempArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    
    tempArray.push(index);
  }
}
console.log(`even number positioned elements in array:${tempArray}`);
console.log(`-----------Odd Numbers positioned elements in array------`);
var tempArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 !== 0) {
    tempArray.push(index);
    
  }

}
console.log(`odd number positioned elements in array:${tempArray}`);
console.log(`----Sum of all numbers in array-----`);
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  sum = sum + arrayNumbers[index];
}
console.log("Total Sum ", sum);

console.log(`-------Multiple of 5-----`);
var tempArray=[];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (arrayNumbers[index] % 5 == 0) {
    tempArray.push(arrayNumbers[index])
  }
}
console.log(arrayNumbers[tempArray]);
console.log(`---step 10------`);

var isAvailable = arrayNumbers.includes(115);
console.log(`115 is available in array:${isAvailable}`);
console.log(`---step 11------`);

var isAvailable = arrayNumbers.includes(23);
console.log(`23 is available in array:${isAvailable}`);

console.log(`-----Inserting 55,66 before index 3 in the array-------`);
var arrayOfNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayOfNumbers);
var arrayResul = arrayOfNumbers.splice(3, 0, 55, 66);
console.log(arrayOfNumbers);

console.log(`=======Remove 3 elements after index 4-----`);
var arrayOfNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayOfNumbers);
var arrayResul = arrayOfNumbers.splice(4, 3);

console.log(`Array after deleting elements: `, arrayOfNumbers);
console.log(`Total elements deleted:`, arrayResul);
