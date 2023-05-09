function solution(players, callings) {
  let result = players;
  let playersObj = {};
  players.forEach((player, i) => (playersObj[player] = i));
  callings.forEach((call) => {
    const idx = playersObj[call];
    const before = players[idx - 1];
    players[idx - 1] = call;
    players[idx] = before;
    playersObj[call]--;
    playersObj[before]++;
  });
  return Object.entries(playersObj)
    .sort((a, b) => a[1] - b[1])
    .map((player) => player[0]);
}
