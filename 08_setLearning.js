//Set: Allow unique elements
const setNumbers = new Set(); // Creating Set
console.log("Adding elements in set");
setNumbers.add(0); 
// Add element
setNumbers.add(1);
setNumbers.add(3);
setNumbers.add(4);
setNumbers.add(1); // Adding duplicate element - 1
setNumbers.add(3);// Adding duplicate element - 3
setNumbers.add(5);
setNumbers.add(6);
console.log(setNumbers);
console.log(`Total available elements in Set`);
const totalElements = setNumbers.size;
console.log(`Total elements in set : ${totalElements}`);
console.log(`After deletion`);
const isDeleted3 = setNumbers.delete(3);
const isDeleted99 = setNumbers.delete(99);
console.log(setNumbers);
console.log(`Is 3 Deleted ? ${isDeleted3}, Is 99 Deleted: ${isDeleted99}`);

console.log(`Check element is available or not using has()`);
const isAvailable4 = setNumbers.has(4);
const isAvailable77 = setNumbers.has(77);
console.log(`Is 4 Available - ${isAvailable4}, Is 77 available - ${isAvailable77}`);

console.log(`Clearing set using clear() `);
// setNumbers.clear();
console.log(setNumbers);

console.log(`Type of set is : ${typeof setNumbers}`);
for (const neha of setNumbers) 
{console.log(neha);}


console.log(`Removing duplicate elements`);
let arrayOfNumbers = [5, 6, 4, 6, 5, 5, 6];
// const mySet = new Set(arrayOfNumbers);
// console.log(mySet);
// const myArray = [...mySet];
// console.log(myArray);   instead of using this 4 lines we can do as follows
const myArray = [...new Set(arrayOfNumbers)];
console.log(myArray);


class Employee{
    constructor(empID,empName,empAge,empCity){
        this.empID=empID
        this.empName=empName
        this.empAge=empAge
        this.empCity=empCity
    }
}
const empSup=new Employee(11,"Supriya",23,"Pune");
const empDhir=new Employee(22,"Dhiraj",24,"Mumbai");
const empSachin=new Employee(33,"Sachin",22,"Surat");
const empGayatri=new Employee(44,"Gayatri",21,"Bengluru");

//collection-collection pf elements
//Elements of datatypes-primitive and non primitive(reference)
const arrayOfEmployees = [empSup,empDhir,empSachin,empGayatri]
for (const employeeData of arrayOfEmployees) {
    console.log(`Employee details are:${employeeData.empID} ${employeeData.empName} ${employeeData.empCity}`);
}

const setOfEmployees = new Set();
setOfEmployees.add(empSup);
setOfEmployees.add(empDhir);
setOfEmployees.add(empSachin);
setOfEmployees.add(empGayatri);








