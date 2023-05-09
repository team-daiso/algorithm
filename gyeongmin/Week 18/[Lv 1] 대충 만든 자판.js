function solution(keymap, targets) {
  // let result = [];
  // 알파벳을 객체의 키로 담고 keymap을 돌면서 가장 작은 수를 객체의 value값으로 넣어주기
  // targets를 돌면서 객체와 일치하는 알파벳 수를 reduce시켜서 result에 push

  const obj = {};
  keymap.forEach((str) =>
    [...str].forEach(
      (el, idx) =>
        (obj[el] = obj.hasOwnProperty(el)
          ? Math.min(obj[el], idx + 1)
          : idx + 1)
    )
  );

  let result = targets.map(
    (str) => [...str].reduce((acc, cur) => acc + obj[cur], 0) || -1
  );

  return result;
}
