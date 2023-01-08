
let name = "John"
let frndName = "Tom"
naem = frndName

// const age = 23;
// const frndAge = 25;
// age = frndAge  //not allowed







//object Freezing

const anil = {
    age : 23,
    name : "Anil",
    company : "Microsoft"
}
anil.country = "India";
anil.age = 27;
delete anil.company
console.log(anil);     
//If I don't want to change values in object i.e. no inserting,deleting,any update nothing want to change then we can freeze 
//the object as below
const sunil = {
    age : 25,
    name : "Sunil",
    company : "Apple"
}
Object.freeze(sunil) //we can see after freezing there will be no change in object i.e.no country added,no age update happen etc
sunil.country = "India"; 
sunil.age = 27;
delete sunil.company
console.log(sunil);   

//Array Freezing
const arrayNumbers = [2,4,5,8]
// arrayNumbers = []  not allowed
arrayNumbers.push(10)
console.log(arrayNumbers);
//now I want to freeze array
Object.freeze(arrayNumbers)
// arrayNumbers.push(7)  //not allowed..It will not add as array is freezed
console.log(arrayNumbers);

//Merging two objects
const kinil = {
    age : 25,
    name : "kinil",
    company : "Apple"
}
const kinilAddress = {
    city : "Pune",
    pin : 142105
}
Object.assign(kinil,kinilAddress)
console.log(kinil);

console.log(kinilAddress);








