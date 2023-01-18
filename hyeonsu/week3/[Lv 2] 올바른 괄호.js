function solution(s){
	// 순서가 맞아야 한다. (="열렸으면" 반드시 닫혀야 한다.
	// 시작은 "(" 로 시작해야 하는 거임..
	// count를 하나 만들고 "("일떄는 ++ ")"일때는 -- 해줌
	// '())('와 같은 경우를 생각해서, count가 0 미만인 경우에는 바로 false를 반환해줌.count가 0 밑으로 간 순간부터 실패임
	let answer = true;
	if(s[0] !== '(' ) {return false}
	
	let count = 0;
	s.split('').map(el => {
			if(count < 0) {
					return false
			}
			if(el === '(') {
					++count
			} else if (el === ')') {
					--count
			}
	});
	return count === 0? true : false;
};