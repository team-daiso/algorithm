function solution(cards1, cards2, goal) {
  let start = 0;
  for (let start = 0; start < goal.length; start++) {
    let word = goal[start];
    if (word === cards1[0]) {
      cards1.shift();
    } else if (word === cards2[0]) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
