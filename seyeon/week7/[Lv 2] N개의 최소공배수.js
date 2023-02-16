function solution(arr) {
  let lcm = arr[0];

  // a와 b의 최소공배수 = a * b / a와 b의 최대공약수
  for (let i = 1; i < arr.length; i++) {
    lcm *= arr[i] / gcd(lcm, arr[i]);
  }

  return lcm;
}

function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

// reduce 사용도 가능!
function solution(arr) {
  return arr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur));
}
