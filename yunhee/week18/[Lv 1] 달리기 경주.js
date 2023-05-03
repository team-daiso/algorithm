function solution(players, callings) {
  const names = {};

  // names에 선수 이름을 키로 순위(인덱스)를 값으로 저장
  players.forEach((player, index) => (names[player] = index));

  // 해설진이 부른 이름대로 순위 변경
  callings.forEach((call) => {
    const index = names[call]; // 현재 순위
    const temp = players[index - 1]; // 앞 순위 선수 이름

    // 현재 인덱스와 이전 인덱스의 값(등수) 교환
    players[index - 1] = call;
    players[index] = temp;

    // map의 인덱스도 변경
    names[call] = index - 1;
    names[temp] = index;
  });

  return players;
}
