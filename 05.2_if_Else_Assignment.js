console.log(`<<============================Using If Else=======================>>`);
console.log(`----------------Voting Eligibility-----------------`);
var votingEligibility = function (age) {
  if (age <= 0 || age > 120) {
    console.log(`${age}:Invalid Data`);
  } else {
    console.log(`Valid Data`);
    if (age >= 18) {
      console.log(`${age} : Congatulation you are eligible for vote`);
    } else {
      `${age} : Sorry you are not eligible for vote}`;
    }
    if (age > 0 && age <= 17) {
      console.log(`${age} :Sorry you are not eligible for vote`);
    } else {
      `${age} : Congatulation you are eligible for vote}`;
    }
  }
};
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

console.log(`---------------Grade Calculation---------------`);
function gradeCalculation(marks) {
  if (marks <= 0 || marks > 100) {
    console.log(`${marks}: Invalid Data : Please provide  the valid marks`);
  } else {
    console.log(`Valid Data`);
    if (marks >= 90 && marks<100) {
      console.log(`${marks} : Fantastic marks ,Your grade is A+`);
    } else {
      `${marks} : Sorry, you are fail`;
    }
    if (marks >= 75 && marks < 90) {
      console.log(`${marks} : Excellent marks  ,Your grade is A`);
    } else {
      `${marks} : Sorry, you are fail`;
    }

    if (marks >= 50 && marks < 75) {
      console.log(`${marks} : Good marks, Your grade is B`);
    } else {
      `${marks}: Sorry, you are fail`;
    }
   
    if (marks >= 35 && marks < 50) {
      console.log(`${marks} : Your marks are less ,Your grade is C,Need improvement`);
    } else {
      `${marks} :  Sorry, you are fail`;
    }
    if (marks < 35  ) {
      console.log(` ${marks} : you are fail ,Need improvement`);
    } else {
      `${marks} :  Sorry `;
    }
  }
}
  gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);

 