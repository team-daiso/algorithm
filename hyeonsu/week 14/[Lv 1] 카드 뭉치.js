function solution(cards1, cards2, goal) {
  // goal 에 forEach 로 순회한다.
  //  있으면 words에 넣어주기
  // 근데 이제 순서대로 넣어줘야함..
  const words = [];
  goal.forEach(el => {
    if (cards1[0] === el) {
      words.push(cards1.shift());
    } else if (cards2[0] === el) {
      words.push(cards2.shift());
    }
  });
  return words.length === goal.length ? "Yes" : "No";
}

function solution(cards1, cards2, goal) {
  // goal 에 forEach 로 순회한다.
  //  있으면 words에 넣어주기
  // 근데 이제 순서대로 넣어줘야함..
  for (let el of goal) {
    if (cards1[0] === el) {
      cards1.shift();
    } else if (cards2[0] === el) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
