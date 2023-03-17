function solution(k, tangerine) {
  const CountBySize = {};
  tangerine.map((size) => {
    size in CountBySize ? CountBySize[size]++ : (CountBySize[size] = 1);
  });
  const countArr = Object.values(CountBySize).sort((a, b) => b - a);

  for (let i = 0; i <= countArr.length; i++) {
    k -= countArr[i];
    if (k <= 0) return i + 1;
  }
}
