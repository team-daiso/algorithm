function getGcm(n, m){
    // 큰 수 m이 작은 수 n으로 나누어 떨어지면 n, m의 최대공약수는 n
    if(m % n === 0) return n;
    
    // m을 n으로 나누었을 때 나머지가 r이면 m, n의 최대공약수는 r과 n의 최대공약수와 같다.
    return m > n ? getGcm(n, m % n) : getGcm(m, n % m);
}

function solution(arr) {
    // n개의 수의 최소공배수 반환
    let lcm = arr[0];
    
    // 현재 최소공배수와 배열의 다음 요소의 최소공배수를 구한다.
    for(let i = 1; i < arr.length; i++){
        let gcm = getGcm(arr[i], lcm);
        lcm = (arr[i] * lcm) / gcm; 
    }
    
    return lcm;
}