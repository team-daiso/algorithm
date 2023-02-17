function solution(n) {
    let stepTwo = [...n.toString(3)].reverse().join('')
    return parseInt(stepTwo, 3);
}

// 3진수를 10진수로 바꾸고 싶을때
// parseInt(바꾸려는 3진수, 3);