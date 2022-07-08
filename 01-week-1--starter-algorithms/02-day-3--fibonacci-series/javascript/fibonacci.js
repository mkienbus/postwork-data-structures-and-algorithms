function fibonacci(num) {
  // type your code here
  console.log(num)
  numbers = [0,1]
  numbers.map(
    sum = numbers[0] + numbers[1]
    )
    console.log(sum)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Pseudocode:
// create a zero index array with starting values, 0 and 1 (index[0]=1, index[1]=1, index[3]=2)
// use iteration (array.map)? to add previous two values, and add the sum to end of array
  //array.push(sum)
// limit number of iterations with loop (while loop?) dicatated by argument provided to fibonacci(num) function
// return array value at argument location sum[num]

// And a written explanation of your solution
