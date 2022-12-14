
var square=function(num){
console.log("square of", num,"=",num*num);
}
console.log("Type of variable=", typeof square);
console.log("==========");
console.log("======square of numbers=====");
square(5);
square(6);
square(25);
square(100);
console.log("=================");
var area=function(length,width){
    console.log("Area of rectangle is","=",length*width);
}
area(499,917)

var swapValues=function(value1,value2){

}
console.log("=======Swap using functionExpression=======");
var swapValues=function(value1,value2){
    console.log("before swap",value1,value2);
    var temp=value1
    value1=value2
    value2=temp
    console.log("After Swap",value1,value2);
}
swapValues("Virat","Anushka");
console.log("-------");
swapValues(1000,2000);

console.log("=======================");
var language="JS the most popular language"
console.log("Total characters available in string=",language.length)
console.log("char at index 6:",language.charAt(6));
console.log("char at index 11:",language.charAt(11));

var lengthTotal=language.length
console.log("char at last index :",language.charAt(lengthTotal-1));
console.log("char at very first index:",language.charAt(0));
console.log("length of given string=",language.length);
square(28)



