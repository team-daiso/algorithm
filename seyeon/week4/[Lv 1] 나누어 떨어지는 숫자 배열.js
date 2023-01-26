function solution(arr, divisor) {
  const filteredArr = arr.filter((num) => !(num % divisor));

  return !filteredArr.length ? [-1] : filteredArr.sort((a, b) => a - b);
}
