function solution(k, dungeons) {
  //["최소 필요 피로도", "소모 피로도"]
  let answer = [];
  const visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    answer.push(count);
    dungeons.forEach((dungeon, i) => {
      const [min, waste] = dungeon;
      if (k >= min && !visited[i]) {
        visited[i] = true;
        dfs(count + 1, k - waste);
        visited[i] = false;
      }
    });
  }

  dfs(0, k); //초기값
  return Math.max(...answer);
}
