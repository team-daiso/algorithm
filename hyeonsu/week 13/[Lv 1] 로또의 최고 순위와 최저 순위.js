function solution(lottos, win_nums) {
  // lottos는 내가 구매한 로또를 담은 배열
  // win_nums는 당첨 번호를 담은 배열

  // 2개 - 5등  3개 - 4등... 7 - (당첨 개수)
  // 될 수 있는 최대 등수는 7 - (당첨 개수 + 0 개수)
  // 될 수 있는 최소 등수 7 - (당첨 개수)
  // 내림차순 정렬. 둘다
  const answer = [1, 1];
  // 당첨 개수
  let win = 0;
  // 0 개수
  let zeroCount = 0;
  lottos.forEach(lotto => {
    lotto === 0 ? ++zeroCount : win_nums.includes(lotto) && ++win;
  });
  if (win === 0 && zeroCount === 0) {
    return [6, 6];
  }
  answer[1] = win <= 1 ? 6 : 7 - win;
  answer[0] = zeroCount >= 6 ? 1 : 7 - win - zeroCount;
  return answer;
}
