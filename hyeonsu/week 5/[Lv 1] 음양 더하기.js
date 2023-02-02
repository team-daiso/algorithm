function solution(absolutes, signs) {
	let nums = absolutes.map((el, idx) => {
			return signs[idx] ? el : - el
	});
	
	return nums.reduce((acc, cur) => acc + cur, 0);
}