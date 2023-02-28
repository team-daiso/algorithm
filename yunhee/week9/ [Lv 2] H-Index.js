function solution(citations) {
    // n회 이상 인용된 논문이 n개 이상일 때 
    
    // 전체 논문을 인용이 많은 순으로 정렬해서 현재 논문 수보다 인용 횟수가 많은 경우의 수
    // [ 25, 8, 5, 3, 3 ]의 경우 25 > 0 => 8 > 1 => 5 > 2 => 3 > 3(인용된 횟수가 논문 수와 같음)이므로 3이 H-index
    // => 논문 인용 횟수가 5번이거나 넘는 논문이 적어도 3편
    citations.sort((a, b) => b - a);
    let answer = 0;
    
    for(let i = 0; i < citations.length; i++){
        if(citations[i] > i) answer++;
        else break;
    }
    
    return answer;
}