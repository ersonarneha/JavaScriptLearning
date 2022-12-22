var sentence = "Yes just do it man,I know you can";
//Print the vowels only-a e i o u orA E I O U
var counter=0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index)
    if (char=="a" || char=="e"|| char=="i" || char=="o"||char=="u" ||
        char=="A" || char=="E"|| char=="I" ||char=="O" ||char=="U") {
     console.log(char);
     counter=counter+1;   
    }


}
console.log(`Total no of vowels in string:${counter}`);
console.log(`======reversing the string=======`);
var sentence = "Yes just do it man,I know you can";
//initialisation condition  update
var reverseString="";
var lastCharPosition=sentence.length-1;
for (let index =lastCharPosition ; index>=0; index--) {
    var char=sentence.charAt(index);
    reverseString=reverseString.concat(char)
    // console.log(char);
    
}
console.log(reverseString);
// Print 5,1000 times
var counter=1;
while (counter<=1000) {console.log(5);
    counter=counter+1;
}












console.log(`========by optimising=======`);
var sentence = "Yes just do it man,I know you can";
//Print the vowels only-a e i o u orA E I O U
var counter=0;

for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index)
    var charCopy=char.toLowerCase();
    if (charCopy=="a" || charCopy=="e"|| charCopy=="i" || charCopy=="o"||charCopy=="u"
        ) {
     console.log(char);
     counter=counter+1;   
    }


}
console.log(`Total no of vowels in string:${counter}`);