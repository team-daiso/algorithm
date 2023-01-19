// 첫번째 풀이
function solution(s) {
	/* s는 숫자로 된 문자열. 각 숫자끼리는 공백으로 구분한다.
		그 공백을 기준으로 배열로 만들고, 그 배열을 오름차순으로 정렬
		정렬한 배열의 0번 인덱스의 요소 + 공백 + 마지막 인덱스 요소 리턴. */
	var answer = '';
	const str = s.split(' ').sort((a,b) => a-b);
	answer += str[0] + ' ' + str[str.length-1]
	return answer;
}

// 두번째 풀이
function solution(s) {
	/* s는 숫자로 된 문자열. 각 숫자끼리는 공백으로 구분한다.
		그 공백을 기준으로 배열로 만들고, 그 배열을 오름차순으로 정렬
		Math.min과 Math.max에 분해할당을 이용해 해당 배열의 요소들을 집어넣어서 최댓값 최솟값 구하기 */
	const numArr = s.split(' ')
	return Math.min(...numArr) + ' ' + Math.max(...numArr)
}