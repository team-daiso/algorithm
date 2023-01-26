function solution(arr) {
	// arr(배열)의 수를 모두 더하고
	// arr.length로 나눠주면 
	return arr.reduce((pre,cur) => pre + cur)/arr.length;
}