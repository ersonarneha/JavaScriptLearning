var string = "I am very good IT developer";
var counter = 0;
for (let index = 0; index < string.length; index++) {
  var char = string.charAt(index);
  var charCopy = char.toLowerCase();
  if (
    charCopy == "a" ||
    charCopy == "e" ||
    charCopy == "i" ||
    charCopy == "o" ||
    charCopy == "u"
  ) {
    console.log(char);
    counter = counter + 1;
  }
}

console.log(`Total no of vowels in given string:${counter}`);
console.log(`--------------Sum of Cubes----------`);
var sumofcube = function (n1) {
  var sum = 0;
  for (let index = 0; index <= n1; index++) {
    cube = index * index * index;
    sum = sum + cube;
  }
  return sum;
};

console.log(`Sum of cubes of numbers from 1 to 5:${sumofcube(5)}`);

console.log(`--------------odd position characters--------`);
function oddPositionChars(string) {
  var res = "";
  for (let index = 0; index < string.length; index++) {
    let char = string.charAt(index);
    if (index % 2 !== 0 && char !== " ") {
      res = res.concat(char);
    }
  }
  console.log(`Odd positioned characters in string-> ${string} are--${res}`);
}
oddPositionChars(`Hard work always pays back`);
oddPositionChars(`Soon I will be Angular IT Champ`);
