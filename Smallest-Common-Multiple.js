/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/


function smallestCommons(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);

  //build an array containing all numbers between min and max
  var numRange = [];
  for (let i = min; max >= i; i++) {
    numRange.push(i);
  }

  // process each number in range
  var multiple = 1;
  var result = min;
  numRange.map(function (val) {
    console.log("current val: " + val);
    //loop until the minimum multiple is divisible by the current range value
    while (min % val !== 0) {

      multiple = multiple + 1;
      min = multiple * result;
      // console.log("min:" + min + " % " + "val:" + val + " =" + min % val);
    }

    //store the result for the current divible range value
    result = min;
    // console.log("current result: " + result);

    //reset the multiple and do the next value in the range
    multiple = 1;
    return;
  });

  return result;

}

console.log(smallestCommons([1, 5])); // should return a number.
console.log(smallestCommons([1, 5])); // should return 60.
console.log(smallestCommons([5, 1])); // should return 60.
console.log(smallestCommons([1, 13])); // should return 360360.
console.log(smallestCommons([23, 18])); // should return 6056820.