function findFirstDuplicate(arr) {
  // new Set() creates an array of unique values
  const uniques = new Set();

  for (const value of arr) {
    console.log(value)
    if (uniques.has(value)) {
      // console.log(uniques)
      return value;
    }
    uniques.add(value);
  }
  return -1;
    
}

  
  

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 1 ,2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([]));
}

module.exports = findFirstDuplicate;

// pseudocode:
// create new Set() of unique arrays
// check uniqueness with Set.has
// return the duplicate value if Set.has == true
// else, return -1