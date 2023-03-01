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
    if (s.includes(number)) {
      s = s.replaceAll(number, idx);
    }
  });
  return +s;
}
