function solution(arr, divisor) {
    let result = arr.filter(v => v % divisor === 0).sort((a,b) => a - b)
    return result.length ? result : [-1] ;
}