function solution(t, p) {
    let n = p.length;
    let result = 0;
    
    for(let i = 0; i <= t.length - n; i++){
        let sliceT = t.slice(i, i + n);
        if(+sliceT <= +p) result++;
    }
    
    return result;
}