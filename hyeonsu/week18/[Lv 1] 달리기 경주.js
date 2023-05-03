function solution(players, callings) {
  // plyears는 선수들의 현재 등수대로 이름이 적힘
  // callings는 해설자들이 부른 이름들 ㅇㅇ
  const answer = [];
  const hash = {};
  players.forEach((el, idx) => {
    hash[idx + 1] = el;
  });
  callings.forEach((el, idx) => {
    const i = Object.values(hash).indexOf(el) + 1;
    const front = hash[i - 1];
    const back = hash[i];
    hash[i - 1] = back;
    hash[i] = front;
  });
  for (let i = 0; i <= players.length - 1; i++) {
    answer[i] = hash[i + 1];
  }
  return answer;
}
