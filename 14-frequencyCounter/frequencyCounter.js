function frequencyCounter(word) {
  // Insert code here;

	let result = {};

	for(var i=0; i<word.length; i++){
		if(!result[word[i]])
			result[word[i]] = 1;
		else
			result[word[i]]++;
	}
	return result;
}

// Do not edit this line;
module.exports = frequencyCounter;