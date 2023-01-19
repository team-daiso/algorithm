function solution(n) {
  let answer = 0;
  for (let divisor = n - 1; divisor >= 2; divisor--) {
    if(n % divisor === 1) answer = divisor
  }
  return answer;
};

function solution(n) {
  // n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 찾아라.
  // 1은 무조건 아니고, 걍 2에서부터 찾자...
  for(let i = 2 ; i < n ; i ++ ) {
      if(n%i === 1) return i
  }
}