let person = {
    height: 6,
    weight:70,
    age:31,
    name:"Billgates",
    speak:function (){
        console.log(`Hey I can speak English & Hindi`);
    }
}
console.log(typeof person);
console.log(person);
console.log(`Accessing object properties using dot notation`);


const personAge=person.age
console.log(`age of person is:${personAge}`);
//another method
console.log(`Accessing object properties using square bracket notation`);
const personName=person["name"]
console.log(`person name is :${personName}`);

console.log(`----------Accessing a function from an object----------`);
person.speak();

console.log(`===========Adding a property inta an object=========`);
//i want to add company of persons i.e propert is company
person.company="Microsoft"
console.log(person);
person.city="Pune"
console.log(person);

person.walk=function(){
    console.log(`Hey I can walk and run`);
}
console.log(person);

console.log(`---Updating property into object-----`);
person.age=65;
console.log(person);

console.log(`---Deleting property into object-----`);
delete person.height;
console.log(person);

console.log(`========creating an empty object===========`);
const mobile={

}
mobile.company="Micromax"
mobile.camera="20 px"
console.log(mobile);
console.log(`----Nested Objects-----`);
const student={
    name:"Stew Jobs",
    age:50,
    marks:{
        science:70,
        math:90,
        english:87,
        add:function () {
            return  this.science + this.math + this.english
        }
    }

}
console.log(`---accessing nested object properties-----`);
const scienceMark=student.marks.science;
console.log(`science mark is:${scienceMark}`);

console.log(`---updating nested object properties-----`);
student.marks.english=91;
console.log(`English marks update:${student.marks.english}`);

console.log(`---Adding nested object properties-----`);
student.marks.programming=100;
console.log(`Adding programing sub marks:${student.marks.programming}`);

console.log(`-----Deleting nested object properties----`);
// delete student.marks.english
console.log(`Delete marks of english:${student.marks.english}`);

console.log(`Accessing a Nested object function`);
const totalMarks=student.marks.add();
console.log(`Total Marks:${totalMarks}`);
console.log(`--------Object entries-----------`);
const ravi = {
    height: 6,
    weight:70,
    age:31,
    name:"Billgates"
}
console.log(Object.entries(ravi));

console.log(`--------Object keys-----------`);
const ram = {
    height: 6,
    weight:70,
    age:31,
    name:"Billgates",
    company:"Microsoft",
    valuation:"130 B $"
}
console.log(Object.keys(ram));
console.log(Object.values(ram));
console.log(`=======for in loop=========`);
for (const key in ram) {
    if (Object.hasOwnProperty.call(ram, key)) {
        const element = ram[key];
        // console.log(element);
        console.log(key,element);
        
    }
}
console.log(`======in operator=====`);
let isAvailable="height" in ram;
console.log(isAvailable);
if (isAvailable==true) {
    delete ram.height;
    console.log(`"heigth" property is deleted successfully `);
}else{console.log(`"height" property not deleted as it is available inside object`)
}
    
