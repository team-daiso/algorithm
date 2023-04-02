function solution(lottos, win_nums) {
  let answer = [];
  const win = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  let whatNum = lottos.filter((el) => el === 0).length;
  const matchNum = win_nums.filter((el) => lottos.includes(el)).length;

  if (matchNum === 6) return [1, 1];
  if (whatNum === 6) return [1, 6];
  answer[0] = win[whatNum + matchNum];
  answer[1] = win[matchNum];
  return answer;
}
