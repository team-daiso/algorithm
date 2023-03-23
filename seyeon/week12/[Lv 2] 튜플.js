function solution(s) {
  const regExp = /[0-9]+/g;

  const group = s.match(regExp).reduce((obj, num) => {
    obj[num] = ++obj[num] || 1;
    return obj;
  }, {});

  return Object.entries(group)
    .sort((a, b) => b[1] - a[1])
    .map((num) => +num[0]);
}
