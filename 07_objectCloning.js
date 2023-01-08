let myName = "Anil"
let yourName = "Sunil"
myName=yourName   //deep cloning-always performed on primitive data types
console.log(myName);
console.log(yourName);


yourName = "Jennifer"
console.log(myName);
console.log(yourName);

//Shallow Cloning
let anil = {
    age:23,
    name:"Anil",
    company:"Microsoft"
}
let sunil = {
    age:26,
    name:"Sunil",
    company:"Google"
}
anil = sunil
console.log("Sunil",sunil);
console.log("Anil",anil);

sunil.country = "India"
console.log("Sunil",sunil.country);
console.log("Anil",anil.country);

//1.Deep cloning using Spread Operator...
let empSumit={
    empName :"Sumit",
empSalary: "70K"
}
//...Spread Operator
console.log(empSumit);
console.log({...empSumit});
let empMohit = {...empSumit};  //deep cloning using spread operator{...}
empMohit.empName = "Mohit"
console.log(empMohit);
console.log(empSumit);

//2.Deep clone using JSON stringify
console.log(`============Deep cloning using stringify=========`);
const empStew={
    name:"Stew Jobs",
    age:50,
    marks:{
        science:70,
        math:90,
        english:87,
        
    }

}
let empBill=JSON.parse(JSON.stringify(empStew));
empBill.name="Billgates";
console.log(empStew);
console.log(empBill);
empBill.marks.science=90
console.log(empStew.marks.science);
console.log(empBill.marks.science);







