function solution(numbers, target) {
  let count = 0;

  const dfs = (depth, sum) => {
    if (depth === numbers.length) {
      if (sum === target) {
        count++;
      }
      return;
    }
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  };

  dfs(0, 0);

  return count;
}
