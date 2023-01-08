console.log(`----------Objects---------`);
let personalDetails={
    name: "Neha Sonar",
    degree:"BE",
    city:"Pune",
    isMarried:"Yes"

}
console.log(personalDetails);
let collegeDetails={
    collegeName:"Sinhagad College of Engineering",
    city : "Pune",
    establishYear: "1996",
    university: "Pune",
    department:"6"
}
console.log(collegeDetails);
console.log(`------Merging of objects-personal details & college details-------`);
Object.assign(personalDetails,collegeDetails)
console.log(personalDetails);
// let mergeObject = {...personalDetails,...collegeDetails}
// console.log(mergeObject);
console.log(`--------Freezing of Array-------`);
let arrayOfFriends=["Bhushan","Swati","Pooja","Yogita","Sandesh"]
Object.freeze(arrayOfFriends)
console.log(arrayOfFriends);
console.log(`----Iterate array of friends names------`);
console.log(arrayOfFriends);
for (const elements of arrayOfFriends) {
    console.log(elements);
}
console.log(`-------Reversing Technology word-------`);
let string = "Codemind Technology";
let emptystring1 =" ";
let emptystring2 =" ";
for (let index = string.length-1; index >=0; index--) {
    const element = string[index];
    if (element==" ") {
    for (let i = 0; i <=index; i++) {
        const element = string[i];
        emptystring2 = emptystring2+element
    }
        break
    }
    emptystring1= emptystring1+element
}
console.log(emptystring2+emptystring1);










