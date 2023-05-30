function solution(want, number, discount) {
  let result = 0;
  const wantNum = {};
  want.forEach((el, idx) => (wantNum[el] = number[idx]));

  function check(arr) {
    const discount = arr.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    for (let pro in wantNum) {
      if (wantNum[pro] !== discount[pro]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < discount.length - 9; i++) {
    const curArr = discount.slice(i, i + 10);
    if (check(curArr)) {
      result++;
    }
  }
  
  return result;
}
