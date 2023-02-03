function solution(left, right) {
    let result = 0;
    
    // left부터 right까지의 약수 구하기
    for(let i = left; i <= right; i++){
        // i 약수의 개수
        let count = 1;
        
        // 약수의 개수 구하기
        for(let j = 2; j <= i; j++) if(i % j === 0) count++;
        
        // 약수의 개수가 짝수라면 더해주고 홀수라면 빼주기
        result = count % 2 === 0 ? result + i : result - i
    }
    
    return result;
}