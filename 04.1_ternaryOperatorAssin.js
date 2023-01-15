console.log(`-------------Male marriage eligibility-----------`);
function maleMarriageEligibility(gender, age, boyName) {
  var eligibleOrNoteligible = (gender = "male" && age >= 21)
    ? `Hey ${boyName} you are eligible for Marriage`
    : `Sorry ${boyName} you are not eligible for Marriage`;
  console.log(`${eligibleOrNoteligible}`);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");


console.log(`-------------Female marriage eligibility-----------`);
function femaleMarriageEligibility(gender, age, girlName) {
  if(gender = "female" && age >= 18){
    console.log(`Hey ${girlName} you are eligible for Marriage`);
      }else{
       console.log( `Sorry ${girlName} you are not eligible for Marriage`);
      }
   
  }
  
  
  maleMarriageEligibility("female", 16, "Jennifer");
  maleMarriageEligibility("female", 27, "Malinda Gates");
  
