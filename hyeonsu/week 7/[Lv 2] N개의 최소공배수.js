function solution(arr) {
  // 최소공배수
  // n개의 수의 최소공배수는 n개의 수들의 배수 중 공통이 되는 가장 작은 수
  // 2개의 자연수 a, b(a > b)에 대해서 a를 b로 나눈 나머지가 r일 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
  // a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수로 나눈 것과 같다

  // 최대공약수를 구해줌
  // 그 최대공약수로 처음 두 수 곱한걸 나눠줌
  arr.sort((a, b) => a - b);
  let greatest;
  let minimum;
  for (let i = 1; i <= arr.length - 1; i++) {
    if (i === 1) {
      greatest = gcd(arr[1], arr[0]);
      minimum = (arr[1] * arr[0]) / greatest;
    } else {
      greatest = gcd(Math.max(minimum, arr[i]), Math.min(minimum, arr[i]));
      minimum = (minimum * arr[i]) / greatest;
    }
  }
  return minimum;
}

function gcd(a, b) {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}
