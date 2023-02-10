function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++ ){
        let divisor = [];
        for(let j = 1; j <= Math.sqrt(i); j++){
            if (i % j === 0) {
                divisor.push(j)
                if( i / j != j){
                    divisor.push(i/j)
                }
            }
        }
        answer += divisor.length % 2 ? -i : i
    }
    return answer;
}