function solution(n) {
  let numbers = new Array(n + 1).fill(true, 2);

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (numbers[i]) {
      // 제곱 이전의 수는 i보다 작은 소수가 시행될 때 이미 걸러짐
      for (let j = i * i; j <= n; j += i) {
        numbers[j] = false;
      }
    }
  }

  return numbers.filter((num) => num).length;
}
