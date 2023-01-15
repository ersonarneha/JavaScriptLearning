class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_emps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
//   array_emps.forEach(element => {
//     console.log(element)
//   });

console.log(
  `==========Employees working in Wipro==============================`
);
const arrayFilterWiproEmployee = array_emps.filter((employee) => {
  return employee.emp_company === "Wipro";
});
arrayFilterWiproEmployee.forEach((element) => {
  console.log(`Name:${element.emp_name}`);
});

console.log(
  `==========Employees working in IT or HR department==============================`
);
const arrayFilterItHrEmployee = array_emps.filter((employee) => {
  return employee.emp_dept === "IT" || employee.emp_dept === "HR";
});
arrayFilterItHrEmployee.forEach((element) => {
  console.log(`Name:${element.emp_name}`);
});

//   if (employee.emp_company==="IT"|| employee.emp_company==="HR") {
// return employee.emp_name;
//     //console.log(`Name:${employee.emp_name}`);
// }
console.log(
  `==========Employee names having Id greater than 50 ==============================`
);
const arrayFilterEmployeeID = array_emps.filter((employee) => {
  return employee.emp_id > 50;
});
arrayFilterEmployeeID.forEach((element) => {
  console.log(`Name:${element.emp_name}`);
});

console.log(
  `==========Employees whose name starts with A, V, M ==============================`
);
const arrayFilterEmployeeData = array_emps.filter((employee) => {
  if (
    employee.emp_name.startsWith("A") ||
    employee.emp_name.startsWith("V") ||
    employee.emp_name.startsWith("M")
  ) {
    //return employee
    console.log(`Name:${employee.emp_name}`);
  }
});

//arrayFilterEmployeeData.forEach((element)=>{console.log(`Name:${element.emp_name}`);})

//   console.log(`============= Sum of all employees salary================`);

// console.log( `==============Avearge salary of employees for all department=============`);

// let sum = 0;
// array_emps.forEach((employee) => {
//   sum = sum + employee.emp_salary;
// });
// console.log(`Sum of salaries of total employees:${sum}`);
// let noOfEmployees = array_emps.length;
// console.log(`Total employees:${noOfEmployees}`);

// let average = sum / noOfEmployees;
// console.log(`Average of salary of all departments is:${average}`);

console.log(
  `========== Average salary for All department ==============================`
);

const arrayTotal = [];
const arrayFilterAllDept = array_emps.filter((employee) => {
  arrayTotal.push(employee.emp_salary);
});

let AverageDataOfSalary =
  arrayTotal.reduce((runningTotal, value) => runningTotal + value) /
  arrayTotal.length;

console.log(`Average salary of All department employee:${AverageDataOfSalary}`);

console.log(
  `========== Average salary for IT department ==============================`
);

const array = [];
const arrayFilterITDept = array_emps.filter((employee) => {
  if (employee.emp_dept === "IT") {
    array.push(employee.emp_salary);
  }
});

let AverageData =
  array.reduce((runningTotal, value) => runningTotal + value) / array.length;

console.log(`Average salary of IT department employee:${AverageData}`);
