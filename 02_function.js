function display () {
// task to perform
console.log("My name:Neha");
console.log("My surname:sonar");
}
    
display();     

// write a function show which should log your college name

function show() {console.log("Government college of Enginnering");} 
show()

function showDetails(myName){console.log("Details",myName);}
showDetails("Neha Sonar");
showDetails("Swati");
showDetails("shila");

function rajuBhaiya(paisa, bag, mobile ){
    console.log(paisa, bag, mobile);
}
rajuBhaiya (100, "bag", "mobile");

console.log("========swap in function=========");

// var value1=100
// var value2=200
// console.log("Before swap",value1,value2);
// var temp=value1
// value1=value2
// value2=temp
// console.log("After swap",value1,value2);

// var value1="Mohit"
// var value2="Hitesh"
// console.log("Before swap",value1,value2);
// var temp=value1
// value1=value2
// value2=temp
// console.log("After swap",value1,value2);

// instead of writing this code again and again we use fuction.

// [100 200
// 2 4
// Mohit  Hitesh]




function swapValues(value1,value2){console.log("Before swap",value1,value2);
var temp=value1
value1=value2
value2=temp
console.log("After swap",value1,value2);}
swapValues(100,200);
swapValues(2,4);
swapValues("Mohit","Hitesh");

console.log("=====Function with arguments and return value=====");
function rajuBhaiya (paisa){
    console.log("going in market");
    console.log("purchased fresh vegetables");
    console.log("come back");
    return "bag of vagetables";
}
var bagOfVegetables=rajuBhaiya(100);
console.log("bagOfVegetables");





































