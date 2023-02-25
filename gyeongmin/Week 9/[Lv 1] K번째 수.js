function solution(array, commands) {
  return commands.map((el) => {
    return array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1];
  });
}
