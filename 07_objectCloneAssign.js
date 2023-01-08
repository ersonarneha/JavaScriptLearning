console.log(`=========================Step 1-->Shallow cloning=============================`);
let arrayNums=[20,3,4,56,90,400,49];
console.log(`Original array:${arrayNums}`);
let arrayOfNumber=arrayNums;
let arrayClone=arrayOfNumber.push(55,66);

console.log(`Cloned and updatedarray:${arrayOfNumber}`);
console.log(`===============================Step 2-->Deep Cloning using spread operator==========`);
let clonedArray=[...arrayNums];
arrayNums.push(10,25);
console.log(`Cloned Array:${clonedArray}`);
console.log(`Original array with update:${arrayNums}`);
console.log(`=========================Step 3-->merged array using spresd operator=================`);
let arrayEven=[2,30,14,8];
console.log(`Original array:${arrayEven}`);
console.log(`array which is going to be merged:${arrayNums}`);
let mergeArray=[...arrayEven,...arrayNums];
console.log(`Merged array:${mergeArray}`);
console.log(`=========================================Step 4=====================================`);
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40.0000INR",
        aug_month:"50.0000INR",
        jun_month:"65.0000INR"
 },
 address:{
    locality:{
        colony:"OM Vrindavan Society",
        street: "Kanch Pokli,431202",
    },
    city:"Mumbai",
    state:"Maharashtra",
    country:"India"
 },
 mobiles:["+91 8600 3456 88","1800-4567 32", "+91-9096 5678 77"]

}
console.log(`Employee details are:${employee_info. address.locality.colony}`);
console.log(employee_info. address.locality.street);
console.log(employee_info. address.city);
console.log(employee_info. address.state);
console.log(employee_info. address.country);
console.log(`mobile numbers are:${employee_info.mobiles}`)
console.log(`=========================Step 5-->Deep cloning by JSON Stringify===================`);
const employeeDetails=JSON.parse(JSON.stringify(employee_info))
console.log(employeeDetails);

console.log(`=================Step 6 (a)--->updating july month salary on cloned object==============`);

employeeDetails.salary.july_month="80.000INR"
console.log(`original object july salary:${employee_info.salary.july_month}`);

console.log(`cloned object updated july salary:${employeeDetails.salary.july_month}`);
console.log(`==========================Step 6(b)-->updating country in original object=====================================`);
employee_info.address.country="United Kingdom"
console.log(` Country in cloned object:${employeeDetails.address.country}`);
console.log(`Updated country in original object:${employee_info.address.country}`);
