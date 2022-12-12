console.log("=======Function without argument and no return=======");
function Trial(){
    console.log("I am trying to learn coding,seems to be interesting");
}
Trial(); 
function Goal(){console.log("My goal is to become successful and best developer");}
Goal()

console.log("=======Function with arguments related personal details=======");
function personalDetails(firstName,lastName,collegeName){
    console.log(firstName,lastName,collegeName);
}
personalDetails("Neha","Sonar","Government College of Enginnering,Jalgaon")

console.log("=======Swap using function=======");
function swapValuesDude(value1,value2){
    console.log("before swap",value1,value2);
    var temp=value1
    value1=value2
    value2=temp
    console.log("After Swap",value1,value2);
}
swapValuesDude("Virat","Anushka");
console.log("-------");
swapValuesDude(1000,2000);

console.log("=======Function with argument and return=======");
function addThreeValues(value1,value2,value3){
    console.log(value1+value2+value3);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning")