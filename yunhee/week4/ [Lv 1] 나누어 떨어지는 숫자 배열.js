function solution(arr, divisor) {
    const sortedArr = arr.filter(num => num % divisor === 0).sort((a, b) => a - b);
    
    return sortedArr.length > 0 ? sortedArr : [-1];
}