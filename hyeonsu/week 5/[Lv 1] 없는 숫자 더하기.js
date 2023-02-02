function solution(numbers) {
	return 45 - numbers.reduce((cur, acc) => cur + acc);
}
// 45에서 있는 숫자의 합을 빼면 남은 숫자의 합 이니께..