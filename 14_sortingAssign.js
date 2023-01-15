const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given array:${array_roll_numbers}`);
console.log(`=========== Reverse the array ===============`);
array_roll_numbers.reverse();
console.log(`Reverse array: ${array_roll_numbers}`);
console.log(`================== sorting array========== ========`);
array_roll_numbers.sort();
console.log(`Array sorting without any custom logic:${array_roll_numbers}`);
console.log(`============= sort array in ascending order ===================`);
array_roll_numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(`Array sorting with custom logic:${array_roll_numbers}`);
console.log(
  `================= Smallest and greatest number ==========================`
);
console.log(
  `Greatest no from array: ${array_roll_numbers[array_roll_numbers.length - 1]}`
);
console.log(`Smallest no from array: ${array_roll_numbers[0]}`);
console.log(
  `===================== Remove duplicate elements from array ======================`
);
const uniqueArray = [...new Set(array_roll_numbers)];
console.log(`Array after removing duplicate elements:${uniqueArray}`);
