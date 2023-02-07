function solution(brown, yellow) {
    // yellow 약수들 중에서, 가로 세로에 각각 2를 더한값이 brown + yellow와 일치해야 한다.
    const answer = [0, 0];
    
    for(let i = 1; i <= Math.sqrt(yellow); i++){
        let divisor = [0,0];
        
        if(yellow % i === 0){
            divisor[0] = yellow/i + 2;
            divisor[1] = i + 2;
        }
        
        if(divisor[0]*divisor[1] === brown + yellow){
            answer[0] = divisor[0]
            answer[1] = divisor[1]
        }
    }
    return answer;
}