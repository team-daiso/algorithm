function solution(s) {
  let hasMore = {};
  let sArr = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((el) => el.split(","))
    .flat();
  Object.values(sArr).forEach((el, i) => {
    !hasMore[el] ? (hasMore[el] = 1) : hasMore[el]++;
  });
  let hasMoreArr = Object.entries(hasMore)
    .sort(([, a], [, b]) => b - a)
    .map((el) => +el[0]);
  return hasMoreArr;
}
