function pairSum(nums, target) {
  // Insert code here;

	if(nums.length <= 1)
		throw 'Length of array is <= 1';

	let mySet = new Set();

	for(var num of nums){
		if(mySet.has(target-num))
			return true;
		else
			mySet.add(num);
	}
	return false;
}

// Do not edit this line;
module.exports = pairSum;