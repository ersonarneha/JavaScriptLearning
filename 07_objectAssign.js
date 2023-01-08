let professor = {};
professor.city = " COEP Pune";
professor.name = "R L Koli";
professor.experience = 10;
professor.subject = "C++";

professor.weight = "85 kg",
 console.log(professor);
professor.degrees = {
  Engineering: "CSC",
  ME: "AI",
  PHD: "Advance Computing",
  add: function () {
    return this.Engineering + " , " + this.ME + " , " + this.PHD;
  },
};
console.log(`----concat degress---`);
const totalDegrees = professor.degrees.add();
console.log(`Total degrees of professor are:${totalDegrees}`);

professor.certificates = {
  Cer1: "Hacker Rank Participation",
  Cer2: "Certificate in IFE Course",
  Cer3: "Certificate in Advance Programming",
  total:function(){
    return this.Cer1+", "+this.Cer2+" ,"+this.Cer3
  }
};
const totalCertificates=professor.certificates.total();
console.log(`Total certificates of Professor are:${totalCertificates}`);

console.log(`---Adding new property-----`);
(professor.age = 40), console.log(`Adding professor age:${professor.age}`);
console.log(`---before updating--------`);
console.log(professor);
console.log(`---Updating property-----`);
professor.weight = "75 kg";
// console.log(`Professor weight is-${professor.weight}`)
console.log(professor);
console.log(`--before deleting  and adding any certification----`);
console.log(professor.certificates);

console.log(`------delete certificate from nested object-----`);
delete professor.certificates.Cer2;
console.log(`delete no 2 certification-${professor.certificates.Cer2}`);

console.log(`------Add certificate in nested object-----`);
professor.certificates.Cer4 = "Advance Java";
console.log(
  `Adding certification in nested object:${professor.certificates.Cer4}`
);
console.log(`------After deleting and adding certification----`);
console.log(professor.certificates);
