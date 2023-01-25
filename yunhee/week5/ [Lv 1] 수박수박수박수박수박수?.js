function solution(n) {
    return [...Array(n)].map((_, idx) => idx % 2 ? "박" : "수").join("");
}