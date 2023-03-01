function solution(n) {
    // 피보나치 수 F(n) = F(n-1) + F(n-2)
    const arr = [1, 1];
    
    for(let i = 2; i <= n; i++){
        arr.push((arr[i-1] + arr[i-2]) % 1234567);
    }
    
    return arr[n];
}