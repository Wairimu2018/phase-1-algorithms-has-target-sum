function hasTargetSum(array, target) {
  // step 1
  //for (let i = 0; i < array.length; i++) {
    const seenNumbers = new Set();
    //iterate over the array of numbers
    for (const number of array){
      //n steps
    const complement = target - number;
    //for (let j = i+1; j < array.length; j++){
      //n steps
      if (seenNumbers.has(complement)) return true;
      //n steps
      seenNumbers.add(number);
  }
// step 1
return false;
// o(3n+2)
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
