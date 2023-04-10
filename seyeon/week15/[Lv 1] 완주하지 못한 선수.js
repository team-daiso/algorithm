function solution(participant, completion) {
  const completionCount = completion.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for (let person of participant) {
    if (completionCount[person]) completionCount[person]--;
    else return person;
  }
}
