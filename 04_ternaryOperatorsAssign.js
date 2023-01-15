console.log(`-----Greatest no among two-------`);
var greatestNumber=function (num1,num2){
    var res =(num1>num2)  ? num1 :num2;
    console.log(`Greatest no among ${num1} & ${num2} is ${res}`);
    
}
// greatestNumber(10,-10);
// var greatestNumber=function (num1,num2){
//     var res =(num1>num2)  ? num1 :num2;
//     console.log(`Greatest no among 800 & 899 is ${res}`);
    
// }

greatestNumber(800,899);
greatestNumber(10,-10);
console.log(`==========Even or Odd no========`);
var noEvenOrOdd=function(value){
    var result= (value%2==0) ? true : false;
    console.log(`${value} is even no- ${result }`);
    ;
    }
noEvenOrOdd(29);
//if I want to result as even or odd word then we should perform following step
// if(data){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// var noEvenOrOdd=function(value){
//     var result= (value%2==0) ? true : false;
//     console.log(`44 is even no- ${result }`);
//     }
noEvenOrOdd(44)
// var noEvenOrOdd=function(value){
//     var result= (value%2==0) ? true : false;
//     console.log(`0 is even no- ${result }`);
//     }
    noEvenOrOdd(0)
    // var noEvenOrOdd=function(value){
    //     var result= (value%2==0) ? true : false;
    //     console.log(`101 is even no- ${result }`);
    //     }
        noEvenOrOdd(101)
        console.log(`=========word length even or odd`);

        var wordLength=function(value){
            var wordLengthEvenOdd=(value.length%2==0) ? "EVEN ": "ODD";
       console.log(`${value} word length is ${wordLengthEvenOdd}`);
        }
        wordLength("JavaScript")
    //     var wordLength=function(value){
    //         var wordLengthEvenOdd=(value.length%2==0) ? "EVEN ": "ODD";
    //    console.log(`Developer word length is ${wordLengthEvenOdd}`);
    //     }
        wordLength("Developer")
    //     var wordLength=function(value){
    //         var wordLengthEvenOdd=(value.length%2==0) ? "EVEN ": "ODD";
    //    console.log(`Google word length is ${wordLengthEvenOdd}`);
    //     }
        wordLength("Google")