function solution(x, n) {
	var answer = [];
	// x는 무조건 push해주고 시작해야함
	// n은 1000이하의 자연수
	// 수는 x에서 +x를 해주는 거
	for(let i = 0; i < n; i++){
			answer[i] = (i+1) * x
	}
	return answer;
}