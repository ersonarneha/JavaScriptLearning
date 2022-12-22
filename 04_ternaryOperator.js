
// If ssc marksgreater than or equal to 35 then pass or fail

var sscMarks=34;
var resultPassOrFail=sscMarks>=35 ? "pass" : "Fail";
console.log(`Result is ${resultPassOrFail}`);

console.log(`---function expression with sscMarks-----`);
var sscResult=function(sscMarks){
    // // 45>=35     &&      !  45>100
    //   true         &&       ! false
    //   true         &&         true
    //   true
    var resultPassOrFail=(sscMarks>=35  && ! (sscMarks>100) )? "pass" : "Fail";
    var resultPassOrFail =(sscMarks<0 || sscMarks>100) ? "In valid data" : sscMarks>35 ? "Pass": "Fail"
    return resultPassOrFail;
}
var result=sscResult(34);
console.log(`Result is ${result}`);

// or we can directly write--console.log(`Result is ${sscResult(34)}`);

console.log(`Result is  75 ${sscResult(75)}`);        // valid value
console.log(`Result is 23 ${sscResult(23)}`);         // valid value
console.log(`Result is  45 ${sscResult(45)}`);        // valid value

console.log(`Result is -10 ${sscResult(-10)}`);       //  invalid value
console.log(`Result is "ten"${sscResult("ten")}`);     // invalid value
console.log(`Result is 1200 ${sscResult(1200)}`);       // invalid value
 