function solution(x, n) {
    let answer = [];
    let newN = x;
    for(let i = 0; i < n; i++){
        answer.push(newN)
        newN += x
    }
    return answer;
}