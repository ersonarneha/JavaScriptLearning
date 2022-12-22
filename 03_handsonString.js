var stringHandsOn = function stringTemplateAssign() {
  console.log(`-------By using string template-------`);
  console.log(`My dream company is "TCS"`);
  console.log(`----by using variable substitution------`);
  var hobby1 = "Badminton";
  var hobby2 = "Reading";
  var hobby3 = "Travelling";
  console.log(`My hobbies are: ${hobby1} ${hobby2} and ${hobby3}`);

  console.log(`---by using concatenation-----`);
  console.log(`My hobbies are:` + hobby1+" " + hobby2+" " + hobby3);
};

stringHandsOn();
