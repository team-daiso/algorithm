function solution(number, limit, power) {
    let result = [1]; //number가 1인경우 미리 제거
    
    for(let i = 2; i <= number; i++){
        let count = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                count++;
                if(i / j != j ){
                    count++;
                }
            }
        }
        result.push(count > limit ? power : count)
    }
    return result.reduce((acc,cur) => acc + cur);
}