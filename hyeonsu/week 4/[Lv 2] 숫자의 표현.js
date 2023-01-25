// 효율성에서 걸렸습니다.
function solution(n) {
	// 가볍게 2중 반복문으로 ㄱ
	var answer = 0;
	for(j = 1 ; j <= n ; j ++) {
			let result = 0;
			for(let i = j; result < n ; i ++) {
							result += i
			}
			if(result === n) {
					answer += 1
			}
	}
	return answer;
}

// 풀었어여. 연속된 숫자의 합이 n이려면 그 조합의 갯수 = n의 홀수인 약수의 갯수 래여
function solution(n) {
	let answer = 1;
	for(let i  = 2 ; i <= n ; i ++) {
			if(i % 2 === 1 && n % i === 0) {
					answer++
			}
	}
	return answer;
}