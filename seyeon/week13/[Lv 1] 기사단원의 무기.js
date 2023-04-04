function solution(number, limit, power) {
  let sum = 1; // 1은 약수가 1개 (본인)

  for (let i = 2; i <= number; i++) {
    let count = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      // 나누는 수(j)와 나눠서 나온 수(i / j)는 둘다 i의 약수!
      if (i % j === 0) {
        count++;
        // 나누는 수(j)와 나눠서 나온 수(i / j)가 같을 때는 중복, count에 추가하지 않음
        if (i / j !== j) count++;
      }
    }

    sum += count > limit ? power : count;
  }

  return sum;
}
