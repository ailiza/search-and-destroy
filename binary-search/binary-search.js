"use strict";

//pseudo code
//need to return true if target is in the array
//our array is already ordered, so we can find a midpoint and cut it in half
//ex. if the ordered list is 1-10 and the midpoint is 5, and our target is 3
//so 3 < 5 --> we toss out the right half and only search the left half
//else search the right half
//after it searches the target that it should be in and if it's not found -->
//need to return false if target is not in the array

//case where if the target === midpoint just return true without searching left or right

// Complete this algo
const binarySearch = (array, target) => {
	//here is our midpoint which is our index
	const midpoint = Math.floor(array.length / 2);
	if (array.length === 1 && array[0] !== target) return false;
	if (array[midpoint] === target) {
		return true;
	} else {
		//left side
		if (target < array[midpoint]) {
			return binarySearch(array.slice(0, midpoint), target);
		} else {
			//right side
			return binarySearch(array.slice(midpoint), target);
		}
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
