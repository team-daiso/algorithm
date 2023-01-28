function solution(numbers) {
  let ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return ten.filter((el) => !numbers.includes(el)).reduce((a, b) => a + b);
}
