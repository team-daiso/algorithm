function solution(players, callings) {
  let place = {};

  players.forEach((v, i) => (place[v] = i));

  for (let callPerson of callings) {
    const beforeCallPlace = place[callPerson];
    const beforeFrontPerson = players[beforeCallPlace - 1];

    // 이름 순서 변경
    players[beforeCallPlace - 1] = callPerson;
    players[beforeCallPlace] = beforeFrontPerson;

    // 순위 변경
    place[callPerson] = beforeCallPlace - 1;
    place[beforeFrontPerson] = beforeCallPlace;
  }

  return players;
}
