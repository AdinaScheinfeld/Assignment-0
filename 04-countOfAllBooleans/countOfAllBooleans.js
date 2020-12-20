function countOfAllBooleans(arr) {
  // Insert code here;

	let count = 0;

	for(var i=0; i<arr.length; i++)
		if(arr[i] === false || arr[i] === true)
			count++;
	
	return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;