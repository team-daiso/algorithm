// 됐어욤 왕~~

function solution(keymap, targets) {
  // keymap = 1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열
  // targets = 입력하려는 문자열들이 담긴 문자열 배열
  // 각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 반환
  // 해시 태이블을 만들어서 알파벳: idx +1의 값으로 저장하면 되지 않을까?
  const hash = {};
  const answer = [];

  keymap.forEach(el => {
    [...el].forEach((char, idx) => {
      if (hash[char] === undefined || hash[char] > idx + 1)
        hash[char] = idx + 1;
    });
  });
  targets.forEach(el => {
    let clicks = 0;
    for (let char of [...el]) {
      if (hash[char]) {
        clicks += hash[char];
      } else {
        clicks = -1;
        break;
      }
    }
    answer.push(clicks === 0 ? -1 : clicks);
  });

  return answer;
}
