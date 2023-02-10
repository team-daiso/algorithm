function solution(left, right) {
	var answer = 0;
	// 나누었을 때 나머지가 0 이면 해당 수의 약수라고 할 수 있음 
	// 나누고 나머지 0이면 배열에 추가하고 배열의 길이가 짝수면 더하고 아니면 빼야함
	// 왼~오의 숫자를 구해야 함
	function divisorCounter (num) {
			let count = 0;
			for(let i =1 ; i <= num ; i ++) {
					if(num %i ===0) {
							count ++
					}
			}
			return count
	}
	
	for(let j = left ; j <= right ; j++) {
		answer += divisorCounter(j) % 2 === 0 ? j : -j
	}
	return answer;
}