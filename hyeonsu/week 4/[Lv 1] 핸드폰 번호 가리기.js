function solution(phone_number) {
	// 배열로 나눠버리고
	// map을 실시해서 인덱스 검사해서 idx < arr.length -5면 *로 만들기 replace
	// 다시 join
	return phone_number.split('').map((num, idx) => {
			return (idx < phone_number.length - 4) ?  '*' : num
	}).join('');
}