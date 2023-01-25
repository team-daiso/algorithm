function getFibonacci(n) {
    let fNum = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      fNum[i] = (fNum[i - 1] + fNum[i - 2])%1234567; 
    }
    return fNum[n];
}

function solution(n) {
    const answer = getFibonacci(n) % 1234567; // % 1234567 생략가능
    return answer;
}
// 이 문제는 각 피보나치 수를 1234567로 나눈 나머지의 피보나치수열을 만들라는 문제