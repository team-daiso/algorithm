function solution(s) {
  // \D는 [^0-9]과 동일
  const regex = /\D/g;
  // 길이가 4, 6이 아니거나, 숫자가 아닌 문자가 발견된다면 false
  return ![4, 6].includes(s.length) ? false : !regex.test(s);
}
