function countChar(string) {
  console.log(string);
  var counter = 0;
  for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    if (char == "a" || char == "A") {
      console.log(char);
      counter = counter + 1;
    }
  }
  console.log(`Total no of "a" & "A" in given string is ${counter}`);
}
countChar(`1. I AM Learning JavaScript,The Language of internet`);
console.log(`---------------------------------------------`);
countChar(`2. My favourite movie is LAggAn`);
