function solution(s) {
  const engNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i < engNum.length; i++) {
    s = s.replaceAll(engNum[i], i);
  }

  return +s;
}
