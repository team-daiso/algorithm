function isPrime(num){
    const root = Math.sqrt(num);
    
    for(let i = 2; i <= root; i++){
        if(num % i === 0) return false
    }
    
    return true;
}

function solution(nums) {
    let decimal = 0;
    
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
                if(isPrime(nums[i] + nums[j] + nums[k])) decimal++;
            }
        }
    }
    
    return decimal;
}