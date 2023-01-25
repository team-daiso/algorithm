function solution(arr, divisor) {
	let answer = arr.filter(el => {
			return el%divisor === 0
	}).sort((a,b) => a-b);
	return answer.length === 0 ? [-1] : answer
}