let arrayOfNumbers=[5,10,4,6,7,10,6];   //Empty array
console.log(arrayOfNumbers);

console.log(`--------Total no of elements in array------`);
let totalElements=arrayOfNumbers.length;
console.log(`Total no of elements in arrayOfNumbers:${totalElements}`);
let typeOfArray=typeof arrayOfNumbers;
console.log(`Type of array-arrayOfNumbers--->${typeOfArray  }`);

console.log(`-------Accessing array elements------`);
let elementAtZeroIndex=arrayOfNumbers[0];
console.log(`Element at zero index : ${elementAtZeroIndex}`);
//or we can also use
console.log(`Element at zero index : ${arrayOfNumbers[0]}`);
console.log(`Element at fifth index : ${arrayOfNumbers[5]}`);
console.log(`Last element-->${totalElements-1}`);
console.log(`When provided value is greater than length-->${arrayOfNumbers[9]}`);
arrayOfNumbers[2]=100;  //update or modify the value using index
console.log(arrayOfNumbers);

let indexOf7=arrayOfNumbers.indexOf(7)
console.log(`Index of element 7 :${indexOf7}`);

let indexOf10=arrayOfNumbers.indexOf(10)
console.log(`Index of element 10 :${indexOf10}`);
console.log(`-----Traversing array-array using for loop----------`);
for (let index = 0; index < arrayOfNumbers.length; index++) { // 0 1 2 3
    const element =  arrayOfNumbers[index];
    console.log(element );
}

console.log(`-----Traversing array-array using for loop in Reverse order----------`);
let lastIndex= arrayOfNumbers.length-1;
for (let index = lastIndex; index >=0 ; index--) { 
    const element =  arrayOfNumbers[index];
    console.log(element );
}

console.log(`------Accessing only even index values-----`);
for (let index = 0; index < arrayOfNumbers.length; index++) { // 0 1 2 3
    if (index%2==0) {
        const element =  arrayOfNumbers[index];
    console.log(element );
    }
    
}
//Array of Salaries
console.log(`------Accessing salary of each employee-----`);
let arrayOfSalaries = [10000,20000,30000,20000,40000];
let sumOfSal = 0;
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];
    sumOfSal=sumOfSal+ element
   
}
console.log(`total salary is:${sumOfSal}`); 

//update the value of that particular array
let arrayOfSal = [10000,20000,30000,20000,40000];
//now suppose I want to change index 1's value i.e.40000 instead of 20000
arrayOfSal[1] = 40000;
console.log(arrayOfSal);

console.log(`------------------push() method----------`);
var arrayOfNum=[4,5,6,8,9,1];
console.log(arrayOfNum);
//now I want to add no in last after 1
arrayOfNum.push(3);    //adding element in the last
arrayOfNum.push(11,22,33);
console.log(arrayOfNum);

console.log(`------------------unshift() method----------`);
var arrayOfNum=[4,5,6,8,9,1];
console.log(arrayOfNum);
arrayOfNum.unshift(77);  //Adding element in starting
arrayOfNum.unshift(99,11,333);
console.log(arrayOfNum);

console.log(`------------------pop() method----------`);
var arrayOfNum=[4,5,6,8,9,33];
console.log(arrayOfNum);
 arrayOfNum.pop();    //removing last elemet
 console.log(arrayOfNum);

 console.log(`------------------shift() method----------`);
var arrayOfNum=[4,5,6,8,9,33];
console.log(arrayOfNum);
 arrayOfNum.shift();    //removing start elemet
 console.log(arrayOfNum);
 
 console.log(`---------same-------`);
 var arrayOfNum=[4,5,6,8,9,33];
let shiftResult=arrayOfNum.shift();    //removing start elemet and returning length
 console.log(shiftResult)
 console.log(arrayOfNum);

 console.log(`=======slice() method`);
 var arrayOfNum=[4,5,6,8,9,33];
 var sliceResult=arrayOfNum.slice(3)
 var sliceRes=arrayOfNum.slice(2,5)
 console.log(arrayOfNum);
 console.log(`Give result after 3 index to last index:${sliceResult}`);
 console.log(`Give result between index 2 to index 5:${sliceRes}`);

 console.log(`=======splice() method-----`);
 var arrayOfNum=[4,5,6,8,9,33,66];
 console.log(arrayOfNum);
 var arrayResul = arrayOfNum.splice(3)  //means remove all elements after index 3
 console.log(`----After using splice (3 method)`);
console.log(`Array after deleting elements: `, arrayOfNum);
console.log(`Total elements deleted:`,arrayResul);


console.log(`=======splice() method-----`);
 var arrayOfNum=[4,5,6,8,9,33,66];
 console.log(arrayOfNum);
 var arrayResul = arrayOfNum.splice(2,3)  //means remove 3 elements after index 2
 console.log(`----After using splice (2,3) method`);
console.log(`Array after deleting elements: `, arrayOfNum);
console.log(`Total elements deleted:`,arrayResul);

console.log(`-----Inserting element in the array-------`);
var arrayOfNum=[4,5,6,8,9,33,66];
 console.log(arrayOfNum);
 var arrayResul = arrayOfNum.splice(2,0,88)  //means insert element before index 2,we dont want any replacement so use 0 there ,a
 //and we want to add 22 before index 2   (in short-Don't replace it just insert)
 console.log(arrayOfNum);
 var arrayResul = arrayOfNum.splice(1,0,55,99,22) 
 console.log(arrayOfNum);

 console.log(`-----Replacing element in the array-------`);
var arrayOfNum=[4,5,6,8,9,33,66];
 console.log(arrayOfNum);
 arrayOfNum.splice(3,1,22222)   //means replace element of index 3 i.e.8 by 1 element which is 22222
 console.log(arrayOfNum);
 arrayOfNum.splice(5,2,53,45)
 console.log(arrayOfNum);


 console.log(`-----Replacing element in the array using (2,3,99,77) method-------`);
var arrayOfNum=[4,5,6,8,9,33,66];
 console.log(arrayOfNum);
 arrayOfNum.splice(2,3,99,77)   //means replace 3 values after index 2 by 99 & 77(by 2 valus)
 console.log(arrayOfNum);

console.log(`------------include method--------------`);
var arrayOfNum=[4,5,6,8,9,33,66];
var isAvailable =arrayOfNum.includes(9)   //to check whwther elent is avaliable in loop or not
 console.log( isAvailable);
 







 console.log(`-----for of loop-------`);
var arrayOfNum=[4,5,6,8,9,33,66];
 console.log(arrayOfNum);
 for (const iteratort of arrayOfNum) {
    console.log(iteratort);
 }



