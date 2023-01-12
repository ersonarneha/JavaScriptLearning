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

   
  console.log(`===================Map created-->Employee ID as a key and object as a value=====================`);
 const mapOfEmployees=new Map()
 mapOfEmployees.set(emp_anil.emp_id,emp_anil);
 mapOfEmployees.set(emp_radha.emp_id,emp_radha);
 mapOfEmployees.set(emp_rishi.emp_id,emp_rishi);
 mapOfEmployees.set(emp_sonali.emp_id,emp_sonali);
 mapOfEmployees.set(emp_monika.emp_id,emp_monika);
 mapOfEmployees.set(emp_viny.emp_id,emp_viny);
 mapOfEmployees.set(emp_mahi.emp_id,emp_mahi);
 const keyOfEmployees=mapOfEmployees.keys();
 console.log(keyOfEmployees);

//  mapOfEmployees.forEach((key, value) => {
//     console.log( value,key);
// } );
console.log(`===========Traversing details of Employees using for each loop =========================`);
mapOfEmployees.forEach((key,value) => {
    console.log(`Emp id: ${key.emp_id}===> Name: ${key.emp_name} ,Dept : ${key.emp_dept},Company: ${key.emp_company},Salari: ${key.emp_salary}`); 
});

