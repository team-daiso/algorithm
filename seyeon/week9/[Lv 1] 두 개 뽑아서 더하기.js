function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) result.push(sum);
    }
  }

  return result.sort((a, b) => a - b);
}
