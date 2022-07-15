function fibonacci(num) {
  // type your code here
  if (num <2){
    return num;
  }

  let numbers = [0,1];

  for (let i = 0; i <num - 1; ++i){
    const sum = numbers[0] + numbers[1];
    numbers = [numbers[1], sum];
  }

  return numbers[1];
  

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
