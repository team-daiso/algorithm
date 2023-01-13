function solution(x, n) {
    //     const arr = [];
        
    //     for(let i = 1; i <= n; i++){
    //         arr.push(x * i);
    //     }
        
    //     return arr;
        
    return new Array(n).fill(x).map((num, idx) => num * (idx + 1));
}