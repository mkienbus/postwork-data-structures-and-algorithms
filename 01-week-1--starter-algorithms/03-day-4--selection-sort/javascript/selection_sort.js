function selectionSort(arr) {
  console.log(arr);

  const sortedValues = [];

  let i = arr.length;

  while (i > 0){
    const minValue = (Math.min(...arr))
    const index = arr.indexOf(minValue);
    console.log(minValue);
    i--;
  }

  return{

  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

//find lowest value with Math.min(arr)
//remove lowest value from arr, and add it to sortedArr
//loop until all arr values are removed
