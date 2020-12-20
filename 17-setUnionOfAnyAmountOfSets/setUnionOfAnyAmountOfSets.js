function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;

	let mySet = new Set();

	for(var i=0; i<args.length; i++){
		for(var arg of args[i]){
			mySet.add(arg);
		}
	}
	return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;