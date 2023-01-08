console.log(`==========join() method=========`);
var arrayOfNum=[4,5,6,8,9,33,66];
var joinResult =arrayOfNum.join("|")  //here separator used to join is pipe operator
console.log(joinResult);
console.log(typeof joinResult);
var joinResult =arrayOfNum.join(" ")  //here sepataor used is empty space
console.log(joinResult);

console.log(`==========concat() method=========`);
var arrayOfNum=[4,5,6,8,9,33,66]
let arrayOfNames = ["Moni","jenny","Shenny","Tomy"]
let arrayOfCities = ["Mumbai","Pune","Banglor"]
const concatArray = arrayOfNum.concat(arrayOfNames,arrayOfCities);
console.log(concatArray);
console.log(typeof concatArray);

console.log(`==========resize an array method=========`);
var arrayOfNum=[4,5,6,8,9,33,66]
console.log(arrayOfNum.length);
arrayOfNum.length = 5;   //means we want only 5 elements
console.log(arrayOfNum);   //remaining 2 elements ignored
console.log(arrayOfNum.length);
console.log(`-----------`);
var arrayOfNum=[4,5,6,8,9,33,66]
console.log(arrayOfNum.length);
arrayOfNum.length = 10;   //means we want 10 elements
console.log(arrayOfNum);   //remaining elements show empty
console.log(arrayOfNum.length);



