function solution(numbers, hand) {
  let answer = "";
  let leftFinger = "*";
  let rightFinger = "#";

  const keypad = [
    [1, 4, 7, "*"],
    [2, 5, 8, 0],
    [3, 6, 9, "#"],
  ];

  function leftOn(idx) {
    leftFinger = numbers[idx];
    answer += "L";
  }

  function rightOn(idx) {
    rightFinger = numbers[idx];
    answer += "R";
  }

  function idx(num, cur) {
    return keypad[num].indexOf(cur);
  }

  for (let i = 0; i < numbers.length; i++) {
    if (keypad[0].includes(numbers[i])) {
      leftOn(i);
    }
    if (keypad[1].includes(numbers[i])) {
      const here = keypad[1].indexOf(numbers[i]);
      let leftDist = keypad[1].includes(leftFinger)
        ? Math.abs(idx(1, leftFinger) - here)
        : Math.abs(idx(0, leftFinger) - here) + 1;
      let rightDist = keypad[1].includes(rightFinger)
        ? Math.abs(idx(1, rightFinger) - here)
        : Math.abs(idx(2, rightFinger) - here) + 1;
      let min = Math.min(leftDist, rightDist);
      if (leftDist === rightDist) {
        hand === "right" ? rightOn(i) : leftOn(i);
      } else if (min === rightDist) {
        rightOn(i);
      } else if (min === leftDist) {
        leftOn(i);
      }
    }
    if (keypad[2].includes(numbers[i])) {
      rightOn(i);
    }
  }
  return answer;
}
