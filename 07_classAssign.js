class Vehicle{
    name
    colour
    wheels
    velocity
    engine
    constructor( name,colour, wheels, velocity,engine){
        this.name=name
        this.colour=colour
        this.wheels=wheels
        this.velocity=velocity
        this.engine=engine
    }
    details(){
        console.log(this.name,this.colour,this.wheels,this.velocity,this.engine);
    }

}
let v1=new Vehicle("Activa 6G","purple",2, "45kmph" ,"109.5CC")
let v2=new Vehicle("Baleno","grey",4, "70kmph" ,"1197CC")
let v3=new Vehicle("Creta","white",4, "60kmph" ,"1497CC")
let v4=new Vehicle("Jaguar","brown",4, "65kmph" ,"4999CC")
let v5=new Vehicle("Pulsar","black",2, "50kmph" ,"124CC")
let v6=new Vehicle("Jupiter","purple",2, "45kmph" ,"109.7CC")
console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
console.log(v5);
console.log(v6);
console.log(`======college details using member function to log the details========`);

class College{
    collegeName
    city
    establishYear
    university
     constructor( collegeName,city,establishYear, university){
        this. collegeName= collegeName
        this.city=city
        this.establishYear=establishYear
        this.university=university
        
    }
    details(){
        console.log("College -"+this. collegeName+"|","City-"+this.city+"|","EstablishYear-"+this.establishYear+"|","University-"+this.university+"|");
    }
    traverseObject(objectdata  ){
        for (const key in objectdata) {
            console.log(key,"-",objectdata[key]);
            
            // if (Object.hasOwnProperty.call(objectdata, key)) {
            //     const element = objectdata[key];
            //     console.log(element,key);
            // }
        }
        console.log(`----------`);
 
    }
}
let c1=new College("Government College Of Engineering","Jalgaon","1996","NMU")
c1.details()
let c2=new College("College of Engineering Pune","Pune ","1854","Pune")
c2.details()
let c3=new College("Visvesvaraya National Institute of Technology","Nagpur ","1960","Mumbai")
c3.details()
let c4=new College("Sinhagad College of Engineering","Pune ","1996","Pune")
c4.details()

console.log(`===============Traversing object using for in loop======================`);
c1.traverseObject(c1);
c2.traverseObject(c2);
c3.traverseObject(c3);
c4.traverseObject(c4);

console.log(`=====fibonialseries========`);
function fibonialseries(){
    var num1=0;
    var num2=1;
    var num=7;
    for (let index = 0; index <=num; index++) {
       
        var sum = num1+num2;
        num1 = num2;
        num2 = sum;
        console.log(num1);
    }
}
fibonialseries()

console.log(`===========Prime Number=========`);
function isPrime(num){
    if(num<2)
    console.log(`${num} is not a prime number`);
    for (var i=2;i<num;i++){
        if(num%i===0){
            console.log(`Given no ${num} is not a prime number`);
        }
    }
    console.log(`Given no ${num} is a prime number`);
}
isPrime(11)







