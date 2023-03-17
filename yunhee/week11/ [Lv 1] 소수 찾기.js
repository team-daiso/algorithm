function solution(n) {
    const isPrime = new Array(n+1).fill(true, 2);
    const sqrt = ~~Math.sqrt(n);
    
    for(let i = 2; i <= sqrt; i++){
        // i가 소수일 경우 소수의 배수는 소수가 아니므로 false로 바꿔줌
        if(isPrime[i]) {
            for(let j = i; i*j <= n; j++){
                isPrime[i*j] = false;
            }
        }
    }
    
    return isPrime.filter(number => number).length;
}