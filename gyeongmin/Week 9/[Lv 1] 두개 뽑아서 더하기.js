//첫번째 방법
function solution(numbers, sum = 0, arr = []) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i !== j) {
        arr.push(numbers[i] + numbers[j]);
      }
    }
  }

  let set = new Set(arr);
  let answer = [...set].sort((x, y) => x - y);
  return answer;
}
//두번째방법(재귀)
function solution(numbers, sumArr = []) {
  const reduceTwoNumber = (arr, start) => {
    if (arr.length === 2) {
      sumArr.push(arr.reduce((acc, cur) => acc + cur));
      return;
    }
    for (let i = start; i < numbers.length; i++) {
      reduceTwoNumber([...arr, numbers[i]], i + 1);
    }
  };
  reduceTwoNumber([], 0);
  return [...new Set(sumArr)].sort((x, y) => x - y);
}
