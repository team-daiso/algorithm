function solution(n, words) {
  let dup = [words[0]];
    
  for (let i = 1; i < words.length; i++) {
    if (
      !dup.includes(words[i]) &&
      words[i - 1][words[i - 1].length - 1] === words[i][0]
    ) {
      dup.push(words[i]);
    } else {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }

  return [0, 0];
}