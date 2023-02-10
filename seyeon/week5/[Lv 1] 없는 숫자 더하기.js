function solution(numbers) {
  const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const missingNums = zeroToNine.filter((el) => !numbers.includes(el));

  return missingNums.reduce((acc, cur) => acc + cur);
}
