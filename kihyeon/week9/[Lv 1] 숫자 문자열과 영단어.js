function solution(str) {
  const stringToNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; i++) {
    str = str.split(stringToNum[i]).join(i);
  }
  return parseInt(str);
}
