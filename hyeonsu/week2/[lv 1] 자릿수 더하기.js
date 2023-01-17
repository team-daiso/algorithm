function solution(n)
{
	// n을 문자열로 나눈다.
	// ''를 기준으로 배열로 만들어줌
	// result를 선언하고, 배열의 요소들을 숫자로 만들어 더해줌
    let str = n.toString();
    let arr = str.split('');
    let result = 0;
    for(let i = 0 ; i <= str.length -1; i ++) {
        result += Number(arr[i])
    }
    return result
}

function solution(n)
{
	// 위랑 비슷한 흐름이지만 for문 대신 reduce를 사용
	return n.toString().split('').reduce((acc,cur) => Number(acc) + Number(cur), 0);
}