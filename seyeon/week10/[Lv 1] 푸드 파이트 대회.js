function solution(food) {
  const placement = food.reduce((acc, cur, i) => acc + `${i}`.repeat(cur / 2), '');

  return `${placement}0${[...placement].reverse().join('')}`;
}
