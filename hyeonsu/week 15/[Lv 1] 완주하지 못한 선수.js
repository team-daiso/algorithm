function solution(participant, completion) {
  // 한명 빼고 다들어옴
  // participant 는 참가자, completion은 완주자
  // 완주하지 못한 사람의 이름을 return
  // 근데 동명이인이 있을 수도..
  let answer = "";
  const participantHash = {};
  const completionHash = {};
  for (let el of participant) {
    participantHash[el] === undefined
      ? (participantHash[el] = 1)
      : participantHash[el]++;
  }
  for (let el of completion) {
    completionHash[el] === undefined
      ? (completionHash[el] = 1)
      : completionHash[el]++;
  }
  for (let el in participantHash) {
    if (participantHash[el] !== completionHash[el]) {
      answer = el;
    }
  }

  return answer;
}

function solution(participant, completion) {
  // 한명 빼고 다들어옴
  // participant 는 참가자, completion은 완주자
  // 완주하지 못한 사람의 이름을 return
  // 근데 동명이인이 있을 수도..
  let answer = "";
  const participantHash = {};
  const completionHash = {};
  for (let el of participant) {
    participantHash[el] === undefined
      ? (participantHash[el] = 1)
      : participantHash[el]++;
  }
  for (let el of completion) {
    completionHash[el] === undefined
      ? (completionHash[el] = 1)
      : completionHash[el]++;
  }
  for (let el in participantHash) {
    if (participantHash[el] !== completionHash[el]) {
      answer = el;
    }
  }

  return answer;
}

// 통과는....되는데......🤔
function solution(participant, completion) {
  // 한명 빼고 다들어옴
  // participant 는 참가자, completion은 완주자
  // 완주하지 못한 사람의 이름을 return
  // 근데 동명이인이 있을 수도..
  let answer = "";
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
