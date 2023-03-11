function solution(s) {
  const pair = { "}": "{", "]": "[", ")": "(" };
  const arr = s.split("");
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // 올바르면 result ++
    if (isValid(arr, pair)) result++;
    // 맨 앞의 문자열을 맨 뒤로 보내고 반복
    arr.push(arr.shift());
  }

  return result;
}

const isValid = (arr, pair) => {
	const stack = [];
	for (let i = 0; i < arr.length; i++) {
		const c = arr[i];
		// pair에 값이 없다면, 그니깐 { [ ( 중 하나라면
		if (pair[c] === undefined) stack.push(c);
		else {
			// pair에 값이 있지만 짝이 안맞는거임
			if (stack[stack.length - 1] !== pair[c]) return false;
			// stack에서 마지막 요소를 제거해주기
			stack.pop();
		}
	}
	// 짝이 안맞는 경우
	if (stack.length) return false;
	// 모든 조건을 통과함. 올바른 괄호 문자열임
	return true;
};