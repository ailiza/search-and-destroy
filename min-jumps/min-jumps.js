"use strict";
//psuedo
//ex. [2,4,1,1,2,3,7,1,1,3]
//we start at the first number in the position 0 of the array which will tell us the maximum number of jumps we can make --> 2
// then we evaluate 4 and 1 to see which is larger to make the biggest leap possible to return the smallest amount of jumps in this array
//keep going until we get out of the array, it's ok if you overshoot
//return the minimum number of jumps

//we'll need a counter to count the number of jumps

// Complete this algo
const minJumps = (arr) => {
	let counter = 1;
	if (arr.length === 1) return counter;

	//ex. [2,4,1,1,2,3,7,1,1,3]
	let currentIndex = 0;
	let possibleJumps = (placeholder = array[0]);
	let possibleJumps = placeholder;
};

for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);

module.exports = minJumps;

// let table = [];
// for (let i = arr.length - 1; i >= 0; i--) {
// 	if (arr[i] + i >= arr.length) {
// 		table.push(i);
// 	}
// }
// console.log("OUR ARRAY!", arr.slice(0, table.pop() + 1));
// return (counter += minJumps(arr.slice(0, table.pop())));
