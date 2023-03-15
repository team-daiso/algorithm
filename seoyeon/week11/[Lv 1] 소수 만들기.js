function solution(nums) {
    //에라토스테네스의 체
    let n = Math.max(...nums);
    let sieve = Array(3 * n + 1).fill(true).fill(false, 0, 2); // 3개의 수를 더한것 중 가장 큰 경우까지 고려해야 하는데, nums에서 가장 큰수를 3번 더한것까지 걸러주도록 함
    for(let i = 2 ; i * i <= sieve.length-1; i++){
        if(sieve[i]){
            for(let j = i * i; j <= sieve.length-1; j+=i){ 
                sieve[j] = false;
            }
        }
    }
    
    let answer = 0;
    
    for(let i = 0; i < nums.length-2; i++){
        for(let j = i + 1; j < nums.length-1; j++){
            for(let k = j + 1; k < nums.length; k++){
                let plusNum = nums[i] + nums[j] + nums[k];
                if(sieve[plusNum]) answer++;
            }
        }
    }
    
    return answer;
}