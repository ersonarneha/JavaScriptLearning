// console.log(`============bank class=========================`);
class bank{
    bankName
    location 
    accountNo 
    ifscCode 
    interestRate
    constructor( bankName,location,accountNo,ifscCode,interestRate){
        this.bankName=bankName
        this.location=location
        this.accountNo=accountNo
        this.ifscCode=ifscCode
        this.interestRate=interestRate
    }
}
const axis_bank = new bank("AXIS BANK",
 "Tilak Road,Akola",
 "35422315565",
 "UTIB0004673",
 "6.9% to 8%")
//  console.log(axis_bank);

 const sbi_bank=new bank("State bank of India",
 "Baner,Pune",
 "15423686565",
 "SBIN0012345",
 "6.9%")
//  console.log(sbi_bank);
 const icici_bank=new bank("Industrial Credit and Investment Corporation of India",
"Chinchwad",
 "52631432568",
 "ICIC0000321",
 "12%"
 )
//  console.log(icici_bank);
 const kotak_bank=new bank("Kotak Mahindra Bank",
 "Kalbadevi,Mumbai",
 "52431452967",
 "KKBK0000961",
 "10 to 10.5%"
 )
//  console.log(kotak_bank);
 const hdfc_bank=new bank("HDFC BANK",
 "Seawoods,Navi Mumbai",
"43622315565",
 "HDFC0001028",
 "11%"
 )
//  console.log(hdfc_bank);
 const punjab_bank=new bank("Punjab National Bank",
 "Hanuman Nagar,Nagpur",
 "15634829671",
 "PUNB0035400",
 "8.9 TO 9.35%"
 )
//  console.log(punjab_bank);
console.log(`===================Map created-->Ac No as a key and object as a value=====================`);
 const mapOfBanks=new Map()
 mapOfBanks.set(axis_bank.accountNo,axis_bank)
 mapOfBanks.set(sbi_bank.accountNo,sbi_bank)
 mapOfBanks.set(icici_bank.accountNo,icici_bank)
 mapOfBanks.set(kotak_bank.accountNo,kotak_bank)
 mapOfBanks.set(hdfc_bank.accountNo,hdfc_bank)
 mapOfBanks.set(punjab_bank.accountNo,punjab_bank)
 const keyOfBanks=mapOfBanks.keys();
 console.log(keyOfBanks);

for (let [key, value] of mapOfBanks) {
    console.log(key,value);
}
console.log(`==================Bank name,Ac No,Interest rate for each object=================================`);
 for (const key of keyOfBanks)
         {const banks = mapOfBanks.get(key);
            console.log(banks.bankName, banks.accountNo,banks.interestRate);}