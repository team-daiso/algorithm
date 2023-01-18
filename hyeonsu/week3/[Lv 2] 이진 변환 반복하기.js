function solution(s) {
	// s는 숫자로 된 문자열임
	// s의 모든 0을 제거함(filter or for문)
	// s = 0이 다 제거된 s.length를 2진 변환한 문자열로 재할당 해줌
	// s가 '1'이 될때까지 계속해서 변환해줌 (while)
	// [이진 변환 횟수, 제거한 0의 갯수]
	let zeroCount = 0;
	let changeCount = 0;
	var answer = [];
	while(s !== '1') {
			++ changeCount 
			let length = s.split('').filter(el => el !== '0').length
			zeroCount += s.length - length
			// s의 모든 0을 제거함
			s = length.toString(2);
			// 2진 변환
	}
	answer.push(changeCount);
	answer.push(zeroCount);
	return answer;
}