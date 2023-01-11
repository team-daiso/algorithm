function solution(num) {
	// 짝수 = 2로 나눴을 때 나머지가 0
	// 홀수 = 2로 나눴을 때 나머지가 1
	var answer = '';
	num%2 === 0 ? answer = 'Even' : answer= 'Odd'
	return answer;
}