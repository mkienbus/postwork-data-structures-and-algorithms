function reverseString(str) {
  // type your code here

  let reversed = '';
  for (let i = str.length - 1; i >= 0; i --){
    reversed += str[i];
  }
  return reversed;
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
// iterate over string, starting from far right index
// create array with those values in order
// return 'reversed' array