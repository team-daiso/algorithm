// 풀이1
function solution(babbling) {
  const regExp = /aya|ye|woo|ma/g;
  let count = 0;

  outer: for (let word of babbling) {
    // word에서 aya, ye, woo, ma와 일치하는 부분만 반환
    const matches = word.match(regExp);
    let previous = '';

    // match의 반환값을 다시 합쳐서 문자열로 만들었을 때 원본인 word와 다르다면
    // 일치하는 문자 외에 다른 문자가 섞여있다는 뜻!
    if (!matches || word !== matches.join('')) {
      continue;
    }

    for (let match of matches) {
      if (match === previous) {
        continue outer;
      }
      previous = match;
    }

    count++;
  }

  return count;
}

// 풀이2
function solution(babbling) {
  // (?!.*(aya|ye|woo|ma)\1) => aya, ye, woo, ma 중 어떤 문자든 2번 이상 반복되지 않아야 한다.
  // ^(aya|ye|woo|ma)$ => aya, ye, woo, ma 중 하나로 시작하고, 끝나야 한다
  const regExp = /^(?!.*(aya|ye|woo|ma)\1)(aya|ye|woo|ma)+$/g;
  let count = 0;

  for (let word of babbling) {
    if (regExp.test(word)) count++;
  }

  return count;
}
