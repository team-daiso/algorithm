function solution(arr) {
    return arr.reduce((acc, cur) => acc + cur) / arr.length;
}