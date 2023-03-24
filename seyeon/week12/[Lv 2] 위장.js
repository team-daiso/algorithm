function solution(clothes) {
  const group = clothes.reduce((obj, [_, item]) => {
    obj[item] = ++obj[item] || 1;
    return obj;
  }, {});

  return Object.values(group).reduce((acc, cur) => acc + cur + acc * cur);
}
