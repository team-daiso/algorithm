function solution(keymap, targets) {
  // 각 문자가 어느 인덱스에 있는지 map으로 저장
  const map = new Map();

  keymap.forEach((keys) =>
    [...keys].map((key, idx) => {
      // map에 문자가 없는 경우 or 있지만 인덱스가 현재보다 더 적은 경우 추가
      if (!map.has(key) || map.get(key) > idx + 1) {
        map.set(key, idx + 1);
      }
    })
  );

  return targets.map((target) => {
    let acc = 0;

    for (let char of target) {
      if (!map.has(char)) return -1;

      acc += map.get(char);
    }

    return acc;
  });
}
