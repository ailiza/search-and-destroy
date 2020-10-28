"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  // console.log("array", array);
  // console.log("target", target);
  const midpoint = Math.floor(array.length / 2);
  if (array[midpoint] === target) return true;
  else {
    if (target < array[midpoint]) {
      for (let i = 0; i <= midpoint; i--) {
        let char = array[midpoint - i];
        if (char === target) return true;
      }
      for (let i = 0; i <= midpoint; i++) {
        let char = array[midpoint + i];
        if (char === target) return true;
      }
    }
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
