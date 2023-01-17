function solution(n) {
	// 문자열로 바꿔줌
	// ''를 기준으로 배열로 만들어줌
	// 뒤집어줌
	// 각 요소를 다시 숫자로 만들어줌
	return n.toString().split('').reverse().map(el => Number(el))
}