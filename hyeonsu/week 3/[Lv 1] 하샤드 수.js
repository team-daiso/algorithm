function solution(x) {
  // x의 자릿수의 수끼리 합한 친구와 x를 나눴을때 나누어 떨어지면 true
  // 10까지는 다 true
  if (x <= 10) return true;
  let sum = `${x}`.split("").reduce((acc, cur) => +acc + +cur);
  return x % sum ? false : true;
}
