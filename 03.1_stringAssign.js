console.log(`-------Javascript--------`);
var word1 =function squareOfWordLength(text){
    var word1="JavaScript"
    console.log(`Length of ${text}: ${word1.length}`);
    console.log(`Square of Length of ${text} :${word1.length*word1.length}`);
}
word1("Javascript")

// console.log(`-------Google Chrome--------`);
// var word2 =function squareOfWordLength(text){
//     var word2="Google Chrome"
//     console.log(`Length of word Google Chrome : ${word2.length}`);
//     console.log(`Square of Length of word Google Chrome :${word2.length*word2.length}`);
// }
word1("Google Chrome")
// console.log(`-------Developer Smart--------`);
// var word3 =function squareOfWordLength(text){
//     var word3="Developer Smart"
//     console.log(`Length of word Developer Smart : ${word3.length}`);
//     console.log(`Square of Length of word Developer Smart :${word3.length*word3.length}`);
// }
word1("Developer Smart")
console.log(`===================Division & Multiplication======================================`);
var myString=function(){
   var myString="I am Angular Developer"
   console.log(`Sring length:${myString.length}`);
   var newString=myString.split(" ")
   console.log(`Total no of words in string:${newString.length}`);

console.log(`Total string length divide by total no of words in string:${myString.length/newString.length}`);
console.log(`Total string length multiply by total no of words in string:${myString.length*newString.length}`);



}
myString()



