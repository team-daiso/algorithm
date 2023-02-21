function solution(n, a, b) {
  var answer = 0;

  //작은수부터 나오게끔 정렬해주기
  let arr = [a, b];
  arr.sort((a, b) => a - b);
  a = arr[0];
  b = arr[1];

  //홀수와 홀수+1일 경우 빼주기
  if (a % 2 !== 0 && a + 1 === b) return 1;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  // console.log(a, b, answer)
  return answer;
}
