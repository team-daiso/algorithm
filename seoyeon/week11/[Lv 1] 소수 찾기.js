function solution(n){
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);
    for(let i = 2 ; i * i <= n; i++){
        if(arr[i]){
            for(let j = i * i; j <= n; j+=i){  // i * i <= n 는 예를들어 n이 120이라면 11^2>120 이므로 더이상 검사 안해도 된다
                arr[j] = false;
            }
        }
    }

    return arr.filter(e => e).length;
}