function solution(N, stages) {
    let result = [];
    for(let i = 1; i <= N; i++){
        let arrivalP = stages.filter(v => v >= i).length;
        let notClearP = stages.filter(v => v === i).length;
        let v = arrivalP === 0 ? 0 : notClearP / arrivalP;
        result.push(v);
    }
		// 아래와 같이 length를 변수 v에서 구해주면 실패가 뜹니다..
    //    for(let i = 1; i <= N; i++){
    //    let arrivalP = stages.filter(v => v >= i);
    //    let notClearP = stages.filter(v => v === i);
    //    let v = arrivalP === 0 ? 0 : notClearP.length / arrivalP.length;
     //   result.push(v);
    //}
		// 원래 이부분을
		// let notClearP = arrivalP.filter(v => v === i); arrivalP구한거를 필터링 하기 위해서 v에서 length를 붙여 줫는데
		// arrivalP를 필터안하고 stages로 필터하고 v에서 length해주면 달라질게 없는데... 실패가 뜹니다..

    let answer = [];
    for(let j = 0; j < result.length; j++){
        let max = Math.max(...result);
        let idx = result.indexOf(max);
        answer.push(idx+1)
        result.splice(idx, 1, -1);
    }
    return answer;
}