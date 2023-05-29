function solution(numbers, target) {
  const length = numbers.length;

  const checked = new Array(length).fill(false);
  let count = 0;

  function dfs(value, depth) {
    // 현재 값이 타겟 값과 같고 현재 루트를 끝까지 재귀했을 경우
    if (depth === length) {
      if (value === target) count++;
      return;
    }

    if (!checked[depth]) {
      checked[depth] = true;
      dfs(value - numbers[depth], depth + 1);
      dfs(value + numbers[depth], depth + 1);
      checked[depth] = false;
    }
  }

  dfs(0, 0);

  return count;
}
