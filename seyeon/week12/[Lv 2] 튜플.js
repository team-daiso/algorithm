function solution(s) {
  const regExp = /[0-9]+/g;
  const group = {};

  s.match(regExp).map((num) => {
    group[num] ? group[num]++ : (group[num] = 1);
  });

  const sortedGroup = Object.entries(group).sort((a, b) => b[1] - a[1]);

  return sortedGroup.map((num) => +num[0]);
}
