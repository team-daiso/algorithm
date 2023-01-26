function solution(num) {
    // 입력된 수가 짝수라면 2, 홀수라면 3을 곱하고 1을 더한다.
    // 위 작업을 1이 될 때까지 반복한다.
    let count = 0;
    
    while(num > 1 && count < 500){
        count++;
        
        if(num % 2 === 0) num /= 2;
        else num = num * 3 + 1;
    }
    
    return count === 500 ? -1 : count;
}