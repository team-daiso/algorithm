function solution(n) {
    let count = 0;
    
    for(let i = 1; i <= n; i++){
        let sum = i;
        
        for(let j = i + 1; j <= n; j++){
            sum += j;

            if(sum === n) count++;
            else if(sum > n) break;
        }   
    }
    
    return count + 1;
}