// Given the home work
// Anil -> Homework
function anilHomeWork(callback){
    console.log("Anil is doing homework... ");
    console.log("After some time.. Anil did homework..");
    callback();
}
// Sunil -> Homework
function sunilHomeWork(){
    console.log("I am happy Anil, you have completed homework");
    console.log("I am bit lazy and don't have time as well");
    console.log("So copying as it is your homework");
}
anilHomeWork(sunilHomeWork);
//sunilHomeWork();

// function show(){
    // console.log("This is show function..");
    // }
    // setTimeout(show, 3000);   3 sec ke bad function show hoga...1000milisec=1sec
setTimeout(function show(){
    console.log("This is show function..");}, 3000);




    console.log("=================Callback with arg functions========");
    let add = function (n1, n2){
        console.log(n1+n2);
    }
    let multiply = function (n1, n2){
        console.log(n1*n2);
    }
    
    function operation(callbackAdd, callbackMultiply){
    callbackAdd(5, 5);
    callbackMultiply(2, 2);
}
 operation(add, multiply);