function solution(num) {
	// num이 짝수면 2로 나눈다
	// num이 홀수면 3을 곱하고 1을 더한다...(짝수가 되는데 그럼?)
	// 이 방법을 계속해서 반복해서 1이 될려면 몇번 반복해야 하는지?
	// 주어진 수가 1이라면 0을 리턴하고
	// count> 500이 넘어간다면 -1을 반환하자.
	// (16) -> 8 -> 4 -> 2 -> 1 = 4
	var answer = 0; // count
	if(num !== 1) {
			while(num !== 1) {
					if(num%2 === 0) {
							num = num / 2;
							answer += 1;
					} else {
							num = num *3 +1;
							answer += 1;
					}
			}
	} 
	if(answer >= 500) answer = -1
	return answer;
}

function solution(num) {
	// num이 짝수면 2로 나눈다
	// num이 홀수면 3을 곱하고 1을 더한다...(짝수가 되는데 그럼?)
	// 이 방법을 계속해서 반복해서 1이 될려면 몇번 반복해야 하는지?
	// 주어진 수가 1이라면 0을 리턴하고
	// count> 500이 넘어간다면 -1을 반환하자.
	// (16) -> 8 -> 4 -> 2 -> 1 = 4
	let count = 0;
	if(num === 1) return count;
	while(num !== 1) {
			++count
			num % 2 === 0 ? num = num / 2 : num = (num * 3 ) + 1;
	}
	return count <= 500 ? count : -1
}