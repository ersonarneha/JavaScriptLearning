function evenOdd(number){
if (number%2==0) {
     return "Even";
} 
return "odd";
};
var data=evenOdd(45)
console.log(data);
console.log(evenOdd(70));

var data1=evenOdd(67)
console.log(data1);
evenOdd(98);
console.log(`=================================`);
function abc(){
    var myString="JavaScript-ES6";
    if (myString.length>10) {
        console.log("true");
    } else {
        console.log("false");
    }
}
abc()
console.log(`========================`);
var myString="JavaScript-ES6";
function abcd(valueData){
   
    if (valueData.length>10) {
        console.log("true");
    } else {
        console.log("false");
    }
}
abcd(myString);
console.log(`================`);
var newString="javaScript Language"
function neha (a1){
if (a1.startsWith("java")) {
    console.log("Yes");
} else {
    console.log("No");
}
}
neha(newString)
console.log(`==================================`);
let string1="javaScript Language";
let result=string1.startsWith("java")
console.log(result);