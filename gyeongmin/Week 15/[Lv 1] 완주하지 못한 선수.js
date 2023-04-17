function solution(participant, completion) {
  participant.sort(); //[ 'ana', 'mislav', 'mislav', 'stanko' ]
  completion.sort(); //[ 'ana', 'mislav', 'stanko' ]

  for (let i = 0; i < completion.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }
  return participant.pop();
}
