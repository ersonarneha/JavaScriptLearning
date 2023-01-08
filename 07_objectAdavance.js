// const interestRate = 7.5%
// interest rate=8.5%    it's not possible bcz we cant update const variable value

let interestRate=7.5
interestRate = 8.5    //we can update let variable value

const ram = {
    height: 6,
    weight:70,
    age:31,
    name:"Billgates",
    company:"Microsoft",
    valuation:"130 B $"
}

// ram={
//     city:"Pune"
// }    not possible bcz ram is const variable,not update.
//But I want to add city propert in that object so use fillowing method
ram.city="Pune" ,
ram.valuation="140 B $"
console.log(ram);  //It will be added