function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    // n / 제곱근의 약수(a) = 약수(b)    ===> 짝꿍인 a와 b를 한번에 구하여 sum에 합산
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        count++; // a
        if (i / j !== j) {
          count++; // b
        }
      }
    }

    sum += count % 2 === 0 ? i : -i;
  }

  return sum;
}

// 수학 천재 경민님 풀이 참고!!
function solution(left, right) {
  let sum = 0;
  // 제곱근이 정수면 약수의 개수가 홀수가 됨
  for (let i = left; i <= right; i++) {
    sum += Number.isInteger(Math.sqrt(i)) ? -i : i;
  }
  return sum;
}
