const employeeAnil={
    name:"Anil",
    id:12,
    age:26,
    city:"Pune"

}
const employeePrathamesh={
    name:"Prathmesh",
    id:11,
    age:26,
    city:"Pune"

}
const employeeSmith={
    name:"Smith",
    id:33,
    age:26,
    city:"Delhi"

}
const employeePoonam={
    name:"Poonam",
    id:33,
    age:26,
    city:"Pune"

}         //Instead of using same keys for everyone separately we use class.i.e.following
class Employee{
    // name
    // id
    // age
    // city     we can keep this 4 values or no need
constructor(name,id,age,city){
    this.name=name;
    this.id=id;
    this.age=age;
    this.city=city
}
//method following if we want to use method for calling and new object
details(){
    console.log(this.name,this.id,this.age,this.city);
}
}
let empSmith=new Employee("Smith",33,26,"Delhi");
let empJay=new Employee("Jay",300,21,"Pune");
let empBill=new Employee("Billgates",200,26,"USA");
let empNeha=new Employee("Neha",25,29,"Pune")
console.log(empSmith);
console.log(empJay.name);
console.log(empBill.age,empBill.name,empBill.id);
//another procedure
empNeha.details();

class student{
    name
    rollNo
    age 
    graduation
    constructor(name, rollNo,age,graduation ){
this.name=name;
this.rollNo=rollNo;
this.age=age;
this.graduation=graduation
    }
    
}
let studChetan= new student("Chetan",121,25,"BE Computer");
let studresh =new student("Reshma",312,20,"MCA");
console.log(studChetan);

let isInstance = studChetan instanceof student; //it tells whether studchetan object is made from student object or not.  
console.log(isInstance);
//object is an instance of class or copy of class




