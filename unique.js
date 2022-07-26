// Will need to take a string and return a string
// The function "unique" needs to look at each letter
// if the letter appears more than once, it isn't added to the final array
// could do a reduce and filter function

function unique(str) {
	return [...str].reduce((acc, curr) => {
		return acc.includes(curr) ? acc : acc + curr;
	}, '');
}
console.log(unique('aabba'));
