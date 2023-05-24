function solution(want, number, discount) {
	// 회원권은 10일 기준
	// want는 정현이가 원하는 제품을 담은 배열
	// numebr는 정현이가 원하는 제품의 수량
	// discount는 할인하는 제품 (일별로 쓰임)

	const hash = {};
	for (let i = 0; i <= want.length - 1; i++) {
		hash[want[i]] = number[i];
	}
	let start = 0;
	let end = 10;
	let answer = 0;

	while (end <= discount.length) {
		const slicedArr = discount.slice(start, end);
		const obj = { ...hash };
		let isUnderZero = true;
		slicedArr.forEach(el => {
			if (obj[el] !== undefined) obj[el]--;
		});
		Object.values(obj).forEach(el => {
			if (el > 0) {
				isUnderZero = false;
			}
		});
		if (isUnderZero) answer++;
		start++;
		end++;
	}
	return answer;
}
