function solution(numbers) {
  const result = [];
  const leng = numbers.length;
  let current = 0;
  let next = 1;

  while (current < leng) {
    if (numbers[next] > numbers[current]) {
      result.push(numbers[next]);
      current++;
      next = current + 1;
    } else if (current === leng - 1 || next === leng - 1) {
      result.push(-1);
      current++;
      next = current + 1;
    } else {
      next++;
    }
  }

  return result;
}
