function reverseString(str) {
  // type your code here
  let splitString = str.split("");
  let reversedArray = splitString.reverse();
  let joinedArray = reversedArray.join("");
  
  return joinedArray;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// without using built in methods:
// map over string, create new array
// reverse mapped array
// return reversed array

// Please add your pseudocode to this file
// And a written explanation of your solution
