function solution(brown, yellow) {
  // brown + yellow의 약수중 약수가 짝수면 중간 두개, 홀수면 중간의 제곱
  // 약수는 본인을 제외하고, n/2 보다 클 수 없다. 
  const sum = brown + yellow;
  const divisors = [];
  const limit = Math.ceil((brown + yellow)/2);
  for(let i = 1; i <= limit ; i ++) {
      if(sum%i === 0) divisors.push(i);
  }
  divisors.push(sum);
  let len = divisors.length;
  return len % 2 === 0 ? [divisors[(len/2)], divisors[(len/2)-1]] : [divisors[Math.floor(len/2)], divisors[Math.floor(len/2)]]
}