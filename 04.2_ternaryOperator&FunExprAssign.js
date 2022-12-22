console.log(`-------------TCS INTERVIEW ELIGIBILITY-----------`);
var interviwEligibility = function (gradeScore,hscScore,sscScore,candidateName) {
  var eligibleOrNoteligible = (gradeScore >= 70 || hscScore >= 80||sscScore >90  )
    ? `Congrats ${candidateName}, you are eligible for TCS interviw`
    : `Unfortunately ${candidateName}, you are not eligible for TCS interviw `;
  console.log(`${eligibleOrNoteligible}`);
}
interviwEligibility(80,86,90,"Neha")
interviwEligibility(70,65,55,"Swati")
interviwEligibility(60,79,88,"Bhushan")
