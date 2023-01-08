// class student{
//     name
//     rollNo
//     age 
//     graduation
//     constructor(name, rollNo,age,graduation ){
// this.name=name;
// this.rollNo=rollNo;
// this.age=age;
// this.grduation=grduation
//     }
    
// }.....here in function constructor this is written just for referance
console.log(`======Function constructor======`);
function student(name,rollNo,age,graduation){
    this.name=name;
this.rollNo = rollNo;
this.age = age;
this.graduation = graduation;}

student.prototype.country="India"

let S1 = new student("Neha",23,29,"BE")
console.log(S1);
let vinny = new student("Vinny",23,29,"BE")
console.log(vinny);
//if I want only age then
console.log(S1.age);
console.log(vinny.country);
console.log(S1.country);



console.log(`--built in objects----`);
let date = new Date();
let month = date.getMonth();  //month +1 krna hota he
let year = date.getFullYear();
let day = date.getDay();
console.log(month,year,day);


let date1 = new Date("1993-09-02");
let month1 = date1.getMonth();  //month +1 krna hota he
let year1 = date1.getFullYear();
let day1 = date1.getDay();
console.log(month1,year1,day1);

let sqrt = Math.sqrt(25);
let pow = Math.pow(2,3);  //*2*2*2/
let pi = Math.PI;
console.log(sqrt,pow,pi);