function solution(clothes) {
  const group = {};

  clothes.map(([_, item]) => {
    group[item] ? group[item]++ : (group[item] = 1);
  });

  const groupNum = Object.values(group);

  return groupNum.reduce((acc, cur) => acc + cur + acc * cur);
}
