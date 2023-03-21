function solution(k, m, score) {
    // 사과 한 상자의 가격 (상자에 담긴 사과 중 최솟값) * (상자에 담긴 사과 개수)
    // 가능한 많은 사과를 팔았을 때 얻을 수 있는 최대 이익 구하기
    let cost = 0; 
    
    score.sort((a, b) => b - a);
    
    for(let i = 0; i < score.length; i += m){
        const min = i + (m - 1);
        
        if(score[min]) cost += (score[min] * m);
    }
    
    return cost;
}