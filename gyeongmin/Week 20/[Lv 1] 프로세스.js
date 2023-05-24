function solution(priorities, location) {
  let result = 0;
  const idxArr = [];
  priorities.forEach((el, idx) => idxArr.push(idx));
  let max = Math.max(...priorities);

  while (priorities.length) {
    if (priorities[0] < max) {
      priorities.push(priorities.shift());
      idxArr.push(idxArr.shift());
    } else {
      // priorities[0] >= max_value
      result++;
      priorities.shift();
      if (idxArr.shift() == location) return result;
      max = Math.max(...priorities);
    }
  }
  return result;
}
