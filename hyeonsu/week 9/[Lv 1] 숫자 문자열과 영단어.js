function solution(s) {
  const numbers = [
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

  numbers.forEach((number, idx) => {
      s = s.replaceAll(number, idx);
  });
  return +s;
}
