const frequencyCounter = word => {

	const result = {};

	for(let i=0; i<word.length; i++){
		if(!result[word[i]])
			result[word[i]] = 1;
		else
			result[word[i]]++;
	}
	return result;
}

// Do not edit this line;
module.exports = frequencyCounter;