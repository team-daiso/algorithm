function solution(absolutes, signs) {
    return absolutes
        .map((v,idx) => signs[idx] ? v : -v)
        .reduce((acc,cur)=> acc + cur);
}