function solution(n, words) {
  // n은 인원수 (2~10)
  // words에는 사용할 단어들이 들어있음
  // 주어진 단어들로 탈락자가 발생하지 않을 수 있음
  // [몇번째 사람, 몇번째 차례]

  // 일단 차례를 카운트 해야 겠고...
  // 전 단어의 마지막 char와 다음 단어의 첫 char가 맞는지 확인
  // 단어가 중복인지 아닌지도 확인...

  // 반복문 while 돌려줘야함...
  // 스택을 하나 준비하고 거기에 words의 단어를 앞에서부터 하나씩 검사해줌
  // 반복될 때 마다 order와 turn은 갱신을 해줘야 함
  // order < n ? order++ : order = 1;
  // turn = Math.ceil(stack.length / n)
  // stack.push(word);
  // idx !== 0이어야 함
  // 중복 단어인지 확인. 중복단어일 때
  // 전 단어의 마지막 char와 다음 단어의 첫 char가 다를 때
  //
  //
  let stack = [];
  let order = 0; // 몇번째 사람인지
  let turn = 0; // 몇번쨰 턴인지
  let idx = 0;
  while (stack.length !== words.length) {
    let word = words[idx];
    order < n ? order++ : (order = 1);
    turn = Math.ceil((idx + 1) / n);
    if (idx === 0) {
      stack.push(word);
    } else {
      if (
        stack.includes(word) ||
        word[0] !== stack[stack.length - 1][stack[stack.length - 1].length - 1]
      ) {
        return [order, turn];
      } else {
        stack.push(word);
      }
    }
    idx++;
  }
  return [0, 0];
}
