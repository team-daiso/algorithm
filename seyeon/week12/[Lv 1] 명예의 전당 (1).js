function solution(k, score) {
  const hall = [];
  const result = [];

  for (const num of score) {
    if (hall.length < k) {
      hall.push(num);
    } else if (hall[hall.length - 1] < num) {
      hall[hall.length - 1] = num;
    }

    hall.sort((a, b) => b - a);
    result.push(hall[hall.length - 1]);
  }

  return result;
}
