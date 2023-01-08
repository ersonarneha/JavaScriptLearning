var num1 = 10;
var num2 = 5;
console.log(`----------arithmetic operators-----------`);
var addResult = num1 + num2;

console.log(`Addition is ${addResult}`);
var subResult = num1 - num2;
console.log(`Subtraction is ${subResult}`);
// another method
console.log(`Subtraction is ${num1 - num2}`);
var multiplyResult = num1 * num2;
console.log(`Multipication is ${multiplyResult}`);
var divResult = num1 / num2;
console.log(`Division is ${divResult}`);
var modulusResult = num1 % num2;
console.log(`modulus is ${modulusResult}`);
// modulus means reminder after division.We use modulus to check whether given no is odd or even
var modulusResult = num1 % 4;
console.log(`modulus is ${modulusResult}`);

var result = 10 % 2;
console.log(`modulus is ${result}`);

console.log(`====unary operators======`);

var num3=10;
// num3=num3+1;  we can use follow,                  
var result = ++num3;
console.log(`Increment operator result is ${result}`);


num4= 5;
var res = --num4;
// means num4 -1
console.log(`Decrement operator result is ${res}`);


console.log(`----------Assignment operators--------`);
var modulusResult = num1 % 3;
console.log(`modulus is ${modulusResult}`);

var num1 = 10;
var num2 = 5;
var result= num1 + num2;
// instead of writing such,we can write follow
 num1 +=  num2;
//  means num1 = num1 + num2
//        num1=15;
// means first addition hoga num1 and num2 ka,then jo result ayega o num 1 ko assign hoga  means num1=num1+num2
console.log(`compound addition ${num1}`);
// also we can do follow
console.log(`compound substraction ${num1-=num2}`);
//                                  num1=num1-num2
//                                   10 =15-5

console.log(`----------omparison operators--------`);
var num1=10;
var num2=5;
var num3=10
var result= num1 > num2;
console.log(`> operator-greater than ${result}`);

var result= num1 < num2;
console.log(`< operator-less than ${result}`);

var result =num1> num3
console.log(`> operator-greater than ${result}`);

var result= num1>= num3
console.log(`>=operator-greater than equal ${result}`);

var result= num1<= num3
console.log(`<=operator-less than equal ${result}`);

console.log(`Check given no is even or odd: ${11%2}`);






