function solution(s) {
	let answer = true
	if(s.length === 4 || s.length ===6){
			let arr = s.split('');
			for (let el of arr) {
					if(isNaN(Number(el))) {
							answer = false;
					}
			}
	} else {
			answer = false
	}
	return answer
}