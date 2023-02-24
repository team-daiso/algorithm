function solution(array, commands) {
  return commands.map((cmd) => array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b)[cmd[2] - 1]);
}
