// 겸댕이 풀이
function solution(arr) {
	var answer = [];
	// arr 의 length가 1 이하일 경우와 아닐 때 생각
	let index = arr.indexOf(Math.min(...arr));
	arr.splice(index,1);
	return arr.length ===0 ? [-1] : arr
}

// 다시 풀었슴ㅁ다
function solution(arr) {
	// 젤 작은 수의 index를 찾아서 splice로 잘라버리자~
	if (arr.length === 1) return [-1]
	arr.splice(arr.indexOf(Math.min(...arr)),1);
	return arr;
}