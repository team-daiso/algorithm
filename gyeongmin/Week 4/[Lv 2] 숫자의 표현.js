//1
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i += 2) {
    //모든 홀수는 n + (n+1)로 표현가능
    if (n % i === 0) answer++;
  }
  return answer;
}

//2
function solution(n) {
  var answer = 1;
  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    let j = i;
    while (sum < n) sum += j++;
    if (sum === n) answer++;
  }
  return answer;
}