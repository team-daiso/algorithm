function solution(numbers, hand) {
  let position = {
    L: [3, 0],
    R: [3, 2],
  };

  return numbers.reduce((acc, cur) => {
    const press = cur === 0 ? [3, 1] : [Math.floor((cur - 1) / 3), (cur - 1) % 3]; // 이번에 누른 번호의 위치
    let usedHand = ''; // 이번에 사용한 손

    if (cur % 3 === 1) {
      usedHand = 'L';
    } else if (cur && cur % 3 === 0) {
      usedHand = 'R';
    } else {
      const leftDistance = getDistance(press, position['L']);
      const rightDistance = getDistance(press, position['R']);

      if (leftDistance < rightDistance) {
        usedHand = 'L';
      } else if (leftDistance > rightDistance) {
        usedHand = 'R';
      } else {
        usedHand = hand === 'left' ? 'L' : 'R';
      }
    }

    position[usedHand] = press;
    return acc + usedHand;
  }, '');
}

const getDistance = (press, position) => {
  return Math.abs(press[0] - position[0]) + Math.abs(press[1] - position[1]);
};
