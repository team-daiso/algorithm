function solution(s) {
    let answer = [];
    const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
		//replace 메서드의 첫번쨰 인자가 정규식인 이유는, 오직 첫 번째 일치되는 문자열만이 교체되기 때문이다.
		//JSON.parse 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성한다.
    arr.sort((a,b) => a.length - b.length);
    
    for(let i of arr){
        for(let j of i){
            if(!answer.includes(j)) answer.push(j);
        }
    }
    
    return answer;
}
