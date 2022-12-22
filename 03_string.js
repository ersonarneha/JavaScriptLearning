var firstName="Dinesh"
console.log( "Given string is","firstName");
console.log("Total character in the string is",firstName.length);
console.log("char at index 3:",firstName.charAt(3));

var lengthTotal=firstName.length;
console.log("char at last index:",firstName.charAt(lengthTotal-1) );

console.log("==========concat==========");
var firstName= "Neha";
var lastName= "Sonar";

// concatenation using + operator

var result= firstName + lastName;
console.log("concatenation using + operator:", result);

var result=firstName.concat(" Suresh ",lastName)
console.log("concatenation using concat():",result);

var greet= "Good Morning";
var indexOf = greet.indexOf("M");
console.log("index of character M:",indexOf);

var indexOfnin = greet.indexOf("nin");
console.log("index of substring nin:",indexOfnin);

var greet= "Good Morning";
var greetAfterReplace=greet.replace("Morning","Afternoon")
console.log("Replace substring Morning with Afternoon:",greetAfterReplace);
console.log(greet.replace("Mor","Eve"));

console.log("To upper case",greet.toUpperCase());
console.log("To lower case",greet.toLowerCase());

var greet= "      Good Morning       ";
console.log("Length",greet.length);    
console.log("Include()" ,greet.includes("Good")); 

var greet= "      Good Morning       ";
var resultTrim=greet.trim();
console.log("Trim()",resultTrim,"Length",resultTrim.length);

var greet= "Good Morning";
var resultSlice=greet.slice(0,4);
console.log("Slice Method",resultSlice);

console.log("Slice with start index",greet.slice(4));
console.log("slice with negative start index ", greet.slice(-7));
console.log("slice with negative start and end index", greet.slice(-7,-2));
// console.log("slice with negative start and end index", greet.slice(-7,2));no result get

var studList="Dips,Jenny,Ganni,Manni,Shani";
var studListSplit=studList.split(",");
console.log("Student list split by char ,",studListSplit);
console.log("total no of students",studListSplit.length);

var sentence="Yes you can do it guys, just keep learning and practising as well";
var wordsInSentence=sentence.split(" ")
console.log("total words in string is:",wordsInSentence.length);

console.log("=========String template=========");
console.log(`Yes you can do it "Sanket"`);

var firstName= "Neha";
var lastName= "Sonar";
console.log("first name is:"+firstName+"last name is:"+lastName);
// instead of writing this we can use  variable substitution method
console.log(`first name is:${firstName} and last name is:${lastName}`);

console.log("Hello","\nGood","\nMorning");
