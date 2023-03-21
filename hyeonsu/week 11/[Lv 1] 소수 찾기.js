function solution(n) {
  // 0이 포함되기 때문에 입력받은 수보다 하나 크게
  const arr = Array.from({ length: n + 1 }).fill(true);
  arr[0] = arr[1] = false;
  // 0하고 1. 어차피 소수 아니니까.
  const sqrt = Math.sqrt(n);
  // 제곱근에 Math.floor를 한 것과 같음.

  for (let i = 2; i <= sqrt; i++) {
    // 소수인지 아닌지를 판별
    if (arr[i] === true) {
      // 처음 2는 당연히 소수가 맞음. 만약에 소수가 맞다면
      for (let j = 2; i * j <= n; j++) {
        // 소수의 배수들을 걸러내는 작업
        arr[i * j] = false;
      }
    }
  }

  return arr.filter(v => v === true).length;
}
