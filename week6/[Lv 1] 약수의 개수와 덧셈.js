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

/*
  예시: 16의 약수는?
  16의 제곱근 = 4
  4까지의 약수는 1, 2, 4
  16 / 1 = 16  ===> 16도 약수!
  16 / 2 = 8   ===> 8도 약수!
  16 / 4 = 4   ===> 4도 약수! but, 4는 이미 구해진 약수 => 코드 상에서 예외처리 필요
*/
