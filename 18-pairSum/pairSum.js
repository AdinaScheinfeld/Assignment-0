let pairSum = (nums, target) => {

	if(nums.length <= 1)
		throw 'Length of array is <= 1';

	const mySet = new Set();

	for(let num of nums){
		if(mySet.has(target-num))
			return true;
		else
			mySet.add(num);
	}
	return false;
}

// Do not edit this line;
module.exports = pairSum;