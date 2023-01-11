function solution(n) {
  var answer = 0;

  if (n === 0) return answer;
  else {
    let arr = [];

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) arr.push(i);
    }
    answer = arr.reduce((pre, cur) => pre + cur);
  }
  return answer;
}
