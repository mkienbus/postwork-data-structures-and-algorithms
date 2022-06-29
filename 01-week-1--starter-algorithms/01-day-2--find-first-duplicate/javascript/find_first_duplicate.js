function findFirstDuplicate(arr) {

  console.log(arr)
  for (i = 0; i < arr.length ; i ++){
      if (arr[i] == arr[i++]){
        
      }
    }
    
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
// compare each element of array, to all elements of array
// nested for loop