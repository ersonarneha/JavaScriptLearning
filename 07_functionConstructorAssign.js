function Bank(bankName,location,ifscCode,branchCode){
this.bankName=bankName
this.location=location
this.ifscCode=ifscCode
this.branchCode=branchCode
}
console.log(`======Using function constructor=======`);
let yesBank=new Bank("Yes Bank","Shivaji Nagar,Pune","YESB0000008","000008")
console.log(`Bank details is:Bank name-${yesBank.bankName},location-${yesBank.location},Code-${yesBank.ifscCode},Branch code-${yesBank.branchCode}`);
let sbiBank=new Bank("SBI Bank","Navi Mumbai","SBIN0016517","016517")
console.log(`Bank details is:Bank name-${sbiBank.bankName},location-${sbiBank.location},Code-${sbiBank.ifscCode},Branch code-${sbiBank.branchCode}`);
let mahBank=new Bank("Bank of Maharashtra","Bytco College road,Nashik","MAHB0001169","001169")
console.log(`Bank details is:Bank name-${mahBank.bankName},location-${mahBank.location},Code-${mahBank.ifscCode},Branch code-${mahBank.branchCode}`);
let axisBank=new Bank("Axis Bank","MG road,Bangluru","UTIB000009","000009")
console.log(`Bank details is:Bank name-${axisBank.bankName},location-${axisBank.location},Code-${axisBank.ifscCode},Branch code-${axisBank.branchCode}`);
console.log(`-----Prototype-adding new datamember using prototype------`);
Bank.prototype.openTime="9 AM IST"
Bank.prototype.closeTime="6 PM IST"
console.log(`Bank open time is:${Bank.prototype.openTime}`);
console.log(`Bank close time is:${Bank.prototype.closeTime}`);
console.log(`--------open and close time of sbi bank-----`);
console.log(`Opening time of sbiBank is:${Bank.prototype.openTime} and closing time of sbiBank is: ${Bank.prototype.closeTime}`);
console.log(`--------axis bank name and close time---------`);
console.log(`Bank details are:bank name-${axisBank.bankName} and closing time of axisBank is: ${Bank.prototype.closeTime}`);
console.log(`-------yes bank details---------------`);
console.log(`Bank details are:bank name-${yesBank.bankName},branch code of yes bank is: ${yesBank.branchCode} and open time of yesBank is: ${Bank.prototype.openTime}`);














