function solution(n) {
	// n의 제곱근을 구함
	// 만약, 제곱근과 제곱근을 반올림한 값이 같다면 n은 어떤 수의 제곱이라는 뜻임
	// 만약 아니면 아닌거고
	var answer = 0;
	let sqrt = Math.sqrt(n)
	if(sqrt === Math.ceil(sqrt)) {
			answer+=  (sqrt + 1)** 2
	} else {
			answer-= 1
	}
	return answer;
}

function solution(n) {
	// n의 제곱근을 구함
	// 만약, 제곱근과 제곱근을 반올림한 값이 같다면 n은 어떤 수의 제곱이라는 뜻임
	// 만약 아니면 아닌거고
	let sqrt = Math.sqrt(n);
	return (sqrt === Math.ceil(sqrt)) ? (sqrt + 1)** 2 : -1 ;
}