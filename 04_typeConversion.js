var numAdd= 10 + 40;
var strAdd = "Pooja"+ 70 ;
console.log(`strAdd is: ${strAdd}`);

console.log(`+ operator can do the type conversin as well from string to number`);

var numStr = "100";
var num = + numStr;  //Explicit conversion
console.log(`type of ${numStr} is : ${typeof numStr}`);
console.log(`type of ${num} is : ${typeof num}`);

var numStr = "Chandra";
var num = + numStr;
console.log(`type of ${numStr} is : ${typeof numStr}`);
console.log(`type of ${num} is : ${typeof num}`);

console.log(`==comparison ${20=="20"}`);  //Implicit conversion

var myNumber = 77;
console.log(`myNumber values ${myNumber} and it's type is :${typeof myNumber}`);

var strMyNumber = myNumber.toString();
console.log(` strMyNumber values ${ strMyNumber} and it's type is :${typeof  strMyNumber}`);

var myNumber = -77.33;
console.log(`myNumber values ${myNumber} and it's type is :${typeof myNumber}`);

var strMyNumber = myNumber.toString();
console.log(` strMyNumber values ${ strMyNumber} and it's type is :${typeof  strMyNumber}`);