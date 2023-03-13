function solution(k, tangerine) {
  //빼야하는 귤 수
  let rejectTangerine = tangerine.length - k;
  let set = {};
  tangerine.forEach((el) => {
    if (!set.hasOwnProperty(el)) set[el] = 1;
    else {
      set[el]++;
    }
  });
  const sortSet = Object.entries(set).sort(([, a], [, b]) => b - a);
  for (let i = sortSet.length - 1; i >= 0; i--) {
    if (sortSet[i][1] <= rejectTangerine) {
      rejectTangerine -= sortSet[i][1];
      sortSet.pop();
    }
  }
  return sortSet.length;
}
