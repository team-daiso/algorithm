function solution(land) {
  // 이전 행에서 현재 밟을 칸을 제외하고 최댓값을 구해 현재 칸에 더한다.
  // => 각 행에는 이전 행들의 최댓값이 누적된다.
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  return Math.max(...land[land.length - 1]);
}
