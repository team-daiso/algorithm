function solution(k, score) {
    // 매일 발표된 명예의 전당의 최하위 점수 반환
    
    const scores = []; // 명예의 전당
    const minScores = []; // 매일 발표된 명예의 전당의 최하위점
    
    for(let current of score){
        // 명예의 전당은 k번째까지이므로 출연한 가수가 k번째 이하면 명예의 전당에 추가
        if(scores.length < k) scores.push(current);
        // 아니라면 최하위 점수와 현재 점수 비교
        else {
            // 명예의 전당 최하위 점수보다 현재 점수가 크다면 교체
            if(scores[scores.length-1] < current){
                scores.pop();
                scores.push(current);
            }
        }
        
        // 점수를 내림차순으로 정렬하고, 최하위 점수를 minScores에 추가
        scores.sort((a, b) => b - a);
        minScores.push(scores[scores.length-1]);
    }
    
    return minScores;
}