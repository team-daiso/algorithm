function solution(a, b) {
    let max = a > b ? a : b; 
    let min = a > b ? b : a; 
    
    // 등차수열의 합
    // a ~ b까지의 개수 * (a + b) / 2 = a ~ b까지의 합
    return  ((max - min) + 1) * (max + min) / 2
}