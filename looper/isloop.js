"use strict";
//pseudocode - looking through the linked list to see if there is a loop
//the start of the list is the head
//we can set an object to put values in them
//need an if/else statement
//if we hit the value then return true
//if we don't hit the value then we keep going to the next node
//otherwise return false because we haven't found a loop

//Complete this algo
const isLoop = (linkedlist) => {
	// console.log("linky", linkedlist);

	let node = linkedlist.head;
	let table = {};

	while (node.next) {
		if (table[node.value]) {
			return true;
		} else {
			table[node.value] = node.value;
			node = node.next;
		}
	}
	return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
