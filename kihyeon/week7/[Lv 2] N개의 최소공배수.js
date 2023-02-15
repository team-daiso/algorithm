function solution(arr) {
  return arr.reduce((acc, cur) => leastCommonMultiple(acc, cur), 1);
}

const leastCommonMultiple = (a, b) => {
  return (a * b) / greatestCommonDivisor(a, b);
};

const greatestCommonDivisor = (a, b) => {
  return b === 0 ? a : greatestCommonDivisor(b, a % b);
};

console.log(solution([2, 6, 8, 14])); // 168