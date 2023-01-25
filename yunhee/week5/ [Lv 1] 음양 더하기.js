function solution(absolutes, signs) {
    return absolutes.map((abs, idx) => signs[idx] ? abs : -abs)
                    .reduce((acc, cur) => acc + cur);
}