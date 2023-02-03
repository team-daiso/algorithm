function solution(n, words) {
  const previousWords = [words[0]];
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    const currentFirst = words[i][0];
    const previousLast = previousWords[i - 1][previousWords[i - 1].length - 1];

    if (i % n === 0) turn++;

    if (currentFirst !== previousLast || words[i].length === 1 || previousWords.includes(words[i])) {
      return [(i % n) + 1, turn]; // 0번째 인덱스부터 첫번째 사람이기 때문에 +1
    }

    previousWords[i] = words[i];
  }
  return [0, 0];
}
