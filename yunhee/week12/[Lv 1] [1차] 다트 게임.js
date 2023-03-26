function solution(result) {
    // 점수|보너스|[옵션] => 점수(0 ~ 10), 보너스(S, D, T), 옵션(*, #, )
    let score = 0;
    const scores = [];
    const bonus = {"S" : 1, "D" : 2, "T" : 3};
    const option = {"*" : 2, "#" : -1};
    
    for(let i = 0; i < result.length; i++){
        const current = result[i]; // 현재 문자열
        
        // 현재 문자열이 보너스 중 하나라면
        if(bonus[current]) {
            // 현재 문자열이 보너스라면 점수에 보너스만큼 제곱한 다음 scores 배열에 담는다.
            scores.push(Math.pow(score, bonus[current]));
            // 점수 초기화
            score = 0;
        }
        // 현재 문자열이 옵션 중 하나라면
        else if(option[current]){
            const lastIdx = scores.length - 1;
            
            // 현재 점수(scores 배열의 마지막 인덱스)에 옵션 점수를 곱한다.
            scores[lastIdx] *= option[current];
            
            // 만약 스타상(*)이면서 이전 점수가 있다면 이전 점수도 2배로 곱해준다. 
            if(current === "*" && scores[lastIdx - 1]) {
                scores[lastIdx - 1] *= option[current];
            }
        }
        // 숫자인 경우
        else score += current;
    }
    
    return scores.reduce((acc, cur) => acc + cur);
}