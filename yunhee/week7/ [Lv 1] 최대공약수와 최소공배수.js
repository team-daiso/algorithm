function getGcm(n, m){
    // 큰 수 m이 작은 수 n으로 나누어 떨어지면 n, m의 최대공약수는 n
    if(m % n === 0){
        return n;
    }
    
    // m을 n으로 나누었을 때 나머지가 r이면 m, n의 최대공약수는 r과 n의 최대공약수와 같다.
    return m > n ? getGcm(n, m % n) : getGcm(m, n % m);
}

function solution(n, m) {
    let gcm = getGcm(n, m);
    let lcm = (n * m) / gcm; // 최소공배수는 (m * n) / gcm과 같다.
    
    return [gcm, lcm];
}