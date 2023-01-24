function solution(n) {
    const arr = [0, 1];
    
    for(let i = 2; n >= i; i++){
        arr.push((arr[i-1] + arr[i-2]) % 1234567)
    }
    
    return arr[n];
}