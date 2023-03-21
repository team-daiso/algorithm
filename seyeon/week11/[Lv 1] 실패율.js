function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    const challengers = stages.filter((el) => el >= i).length;
    const failure = stages.filter((el) => el === i).length;
    const rate = challengers === 0 ? 0 : failure / challengers;

    result.push([i, rate]);
  }

  result.sort((a, b) => b[1] - a[1]);

  return result.map((el) => el[0]);
}
