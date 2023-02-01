function solution(arr) {
	// 젤 작은 수의 index를 찾아서 splice로 잘라버리자~
	if (arr.length === 1) return [-1]
	arr.splice(arr.indexOf(Math.min(...arr)),1);
	return arr;
}