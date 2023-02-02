function solution(a, b) {
    return a.reduce((acc, cur, idx) => cur * b[idx] + acc, 0);
}