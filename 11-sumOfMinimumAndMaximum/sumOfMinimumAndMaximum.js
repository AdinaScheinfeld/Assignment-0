const sumOfMinimumAndMaximum = nums => {

	let min = nums[0];
	let max = nums[0];

	nums.forEach(num => {
		if(num<min)
			min = num;
		else if(num>max)
			max = num;
	});
	return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;