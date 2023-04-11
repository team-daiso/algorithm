function solution(participant, completion) {
  const hash = {};

  for (const p of participant) {
    hash[p] = (hash[p] || 0) + 1;
  }

  for (const c of completion) {
    hash[c]--;
  }

  for (const key in hash) {
    if (hash[key] > 0) {
      return key;
    }
  }
}
