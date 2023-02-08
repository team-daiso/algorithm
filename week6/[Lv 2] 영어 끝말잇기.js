function solution(n, words) {
  const previous = [words[0]];
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    const currentFirst = words[i][0];
    const previousLast = previous[i - 1][previous[i - 1].length - 1];

    if (i % n === 0) turn++;

    if (currentFirst !== previousLast || previous.includes(words[i])) {
      return [(i % n) + 1, turn]; // 0번째 인덱스부터 첫번째 사람이기 때문에 +1
    }

    previous[i] = words[i];
  }
  return [0, 0];
}
