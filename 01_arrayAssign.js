const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal);

console.log(`==========first and last element on console=========`);
console.log(
  `First element:${fruits_seasonal[0]} and Last element: ${
    fruits_seasonal[fruits_seasonal.length - 1]
  }`
);
console.log(`----------Adding papaya before banana---------`);
var seasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(seasonalFruits);
seasonalFruits.unshift("Papaya");
console.log(seasonalFruits);

console.log(`--------Removing mango--------`);
var seasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(seasonalFruits);
seasonalFruits.splice(3, 1);
console.log(seasonalFruits);

console.log(`-------Adding Pineapple in last-------`);
var seasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(seasonalFruits);
seasonalFruits.push("Pineapple");
console.log(seasonalFruits);

console.log(`------Adding Dragon fruit before water melon-----`);
var seasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(seasonalFruits);
var arrayResu = seasonalFruits.splice(4, " ", "Dragon Fruit");
console.log(seasonalFruits);

console.log(`--------Replace orange with Kiwi-------`);
var seasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(seasonalFruits);
seasonalFruits.splice(1, 1, "Kiwi");
console.log(seasonalFruits);

console.log(`--------1 to 4 elements-------`);
var seasonalFruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Water Melon",
  "sds",
];
console.log(seasonalFruits);
var sliceRes1 = seasonalFruits.slice(1, 5);

console.log(sliceRes1);

console.log(`--------last 3 elements in array-------`);
var seasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(seasonalFruits);
let sliceRes = seasonalFruits.slice(seasonalFruits.length - 3);
console.log(sliceRes);
