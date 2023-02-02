function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur : -cur), 0);
}
