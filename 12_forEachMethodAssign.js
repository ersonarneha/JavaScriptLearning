const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(array_numbers);
console.log(`========== Array elements with their index values ===========`);
array_numbers.forEach((currentValue, index, array) => {
  console.log(`No ${currentValue} ,having index value:${index} `);
});

console.log("=========== Find positive numbers from array ==========");

const arrayOfPositiveNo = [];

array_numbers.forEach((currentValue) => {
  if (currentValue > 0) {
    arrayOfPositiveNo.push(currentValue);
    console.log(currentValue);
  }
});

console.log("======== Find Negative numbers from array ==========");

const arrayOfNegativeNo = [];

array_numbers.forEach((currentValue) => {
  if (currentValue < 0) {
    arrayOfNegativeNo.push(currentValue);
    console.log(currentValue);
  }
});
console.log("============= Array of Negative numbers =============");
console.log(arrayOfNegativeNo);

console.log("======== Find even numbers from array==========");

const arrayOfEven = [];

array_numbers.forEach((currentValue) => {
  if (currentValue % 2 == 0) {
    arrayOfEven.push(currentValue);
    console.log(currentValue);
  }
});
console.log(`================Sum of array elements==============`);
function sumArray(array) {
  const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  console.log(sum);
  return sum;
}
sumArray([1, -7, 40, 502, -77, 91, 0, 108, 89, -601]);
console.log(`=========Even positioned array values================`);
array_numbers.forEach((currentValue, index) => {
  if (index % 2 == 0) {
    console.log("index:", index, "Value:", currentValue);
  }
});
