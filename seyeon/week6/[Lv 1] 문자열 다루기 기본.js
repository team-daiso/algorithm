function solution(s) {
  const regex = /\D/g; // /[^0-9]/g 와 동일

  // 길이가 4, 6이 아니거나, 숫자가 아닌 문자가 발견된다면 false
  return ![4, 6].includes(s.length) && !regex.test(s);
}
