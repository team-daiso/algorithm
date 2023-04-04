function solution(cards1, cards2, goal) {
  let index1 = 0;
  let index2 = 0;

  for (let i = 0; i < goal.length; i++) {
    if (index1 < cards1.length && cards1[index1] === goal[i]) {
      index1++;
    } else if (index2 < cards2.length && cards2[index2] === goal[i]) {
      index2++;
    } else {
      return "No";
    }
  }

  return "Yes";
}
