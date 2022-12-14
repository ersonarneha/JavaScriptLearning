var stringHandsOn=function (){
var myString=`     Hey you are doing good, keep it up     `
console.log(`String as it is: "     Hey you are doing good,keep it up     "`);
console.log(`String length is: ${myString.length}`);
console.log(`After removing extra spaces seems:${myString.trim()}`);
console.log(`total number of char in string before removing spaces:${myString.length}`);


var newString=`${myString.trim()}`
console.log(`Total no of characters after removing spaces:${newString.length}`);
console.log(`No of extra spaces removed:10`);

console.log(`first character after trim:${newString.charAt(0)},last character after trim:${newString.charAt(33)} `)
var wordsInString=newString.split(" ")
console.log(`Total words in string after step trim:${wordsInString.length}`);

var indexOfgood=newString.indexOf("good")
console.log(`index of substring "good":${indexOfgood}`);

console.log(`Substring start with index 22: ${newString.slice(22)}`);
console.log(`String ends with word "up"is:${newString.endsWith("up")}`);
console.log(`String starts with word "Hey"is:${newString.startsWith("Hey")}`);

















}


stringHandsOn()