function solution(x) {
    // 하샤드 수 : x % x의 자릿수의 합 === 0
    return x % ([...`${x}`].reduce((acc, cur) => acc + Number(cur), 0)) === 0
}