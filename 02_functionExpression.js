var myName="Neha";
console.log(myName);

// function Expression
var showResult =function(){
    console.log("show......");
};
showResult ( );

// We can store function as a value in js

var subtraction=function(num1,num2){
    var result=num1-num2;
    console.log("subtraction.....",result);
    return result;
}
var result=subtraction(65,20);
console.log(result);

// var subtraction=function(num1,num2){
//     // var result=num1-num2;
//     console.log(`subtraction is : ${num1-num2}`);
//     // return result;
// }
// subtraction(10,25)

var square=function(num){
    console.log("square of", num,"=",num*num);
}
square(5)
square(22)

var myName=function(num1,num2,city){
    var result=num1*num2;
    return result;
}
 var res=myName (50,100,"pune")
 console.log(res);