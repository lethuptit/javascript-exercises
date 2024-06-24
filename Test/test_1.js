function countTrue(arr) {
	// const falseNum =  arr.filter((a) => a===false).length;
	// return arr.length - falseNum	

    const falseNum =  arr.filter(Boolean).length;
	return falseNum	
}	

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue(["false", false, 2, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))