console.log(`======================class --->bank=======================`);
class bank{
    bank_name
    location 
    account_no 
    ifscCode 
    interest_rate
    constructor( bank_name,location,account_no,ifscCode,interest_rate){
        this.bank_name=bank_name
        this.location=location
        this.account_no=account_no
        this.ifscCode=ifscCode
        this.interest_rate=interest_rate
    }
}
const axis_bank = new bank("AXIS BANK",
 "Tilak Road,Akola",
 "35422315565",
 "UTIB0004673",
 "6.9% to 8%")
 console.log(axis_bank);

 const sbi_bank=new bank("State bank of India",
 "Baner,Pune",
 "15423686565",
 "SBIN0012345",
 "6.9%")
 console.log(sbi_bank);
 const icici_bank=new bank("Industrial Credit and Investment Corporation of India",
"Chinchwad",
 "52631432568",
 "ICIC0000321",
 "12%"
 )
 console.log(icici_bank);
 const kotak_bank=new bank("Kotak Mahindra Bank",
 "Kalbadevi,Mumbai",
 "52431452967",
 "KKBK0000961",
 "10 to 10.5%"
 )
 console.log(kotak_bank);
 const hdfc_bank=new bank("HDFC BANK",
 "Seawoods,Navi Mumbai",
"43622315565",
 "HDFC0001028",
 "11%"
 )
 console.log(hdfc_bank);
 const punjab_bank=new bank("Punjab National Bank",
 "Hanuman Nagar,Nagpur",
 "15634829671",
 "PUNB0035400",
 "8.9 TO 9.35%"
 )
 console.log(punjab_bank);
console.log(`====================Add all object elements in array & log bank name and location===============================`);
let array = [];
array.push(axis_bank);
array.push(sbi_bank);
array.push(icici_bank);
array.push(kotak_bank);
array.push(hdfc_bank);
array.push(punjab_bank);



 for (const iterator of array) {
    console.log(iterator.bank_name,iterator.location);
 }
console.log(`===============Find the object from array using for of loop====================================`);
 for (const iterator of array) {
    if(iterator.bank_name=='Kotak Mahindra Bank'){
        console.log(iterator);
    }
    
 }