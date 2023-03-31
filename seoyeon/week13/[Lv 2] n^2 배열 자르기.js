function solution(n, left, right) {
    let arr = [];

    for(let i = left; i <= right; i++){
        let max = Math.max(parseInt(i / n), i % n);
        arr.push(max + 1);
    }
    return arr;
}