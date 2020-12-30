let setUnionOfAnyAmountOfSets = (...args) => {

	const mySet = new Set();

	for(let i=0; i<args.length; i++){
		for(let arg of args[i]){
			mySet.add(arg);
		}
	}
	return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;