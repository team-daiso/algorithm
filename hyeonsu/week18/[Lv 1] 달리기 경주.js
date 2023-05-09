function solution(players, callings) {
  // plyears는 선수들의 현재 등수대로 이름이 적힘
  // callings는 해설자들이 부른 이름들 ㅇㅇ
  const answer = [];
  const hash = {};
  players.forEach((el, idx) => {
    hash[el] = idx + 1;
  });
  callings.forEach((el, idx) => {
    // 불린 플레이어가 누군지?
    // 그보다 앞선 플레이어는 또 누구였는지?
    const backPlayerIdx = hash[el];
    const frontPlayer = players[backPlayerIdx - 2];
    players[backPlayerIdx - 1] = frontPlayer;
    players[backPlayerIdx - 2] = el;
    hash[el]--;
    hash[frontPlayer]++;
  });
  for (let i = 0; i <= players.length - 1; i++) {
    answer[i] = hash[i + 1];
  }
  return players;
}
