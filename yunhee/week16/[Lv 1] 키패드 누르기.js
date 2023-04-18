function getDistance(distance) {
  distance = Math.abs(distance);

  // 상: -3, 하: 3, 좌: -1, 우: 1
  // number에서 현재 위치를 뺀 숫자가 3보다 작으면 상,하로 움직인게 아니라 좌우로 움직인 것이므로 뺀 값을 그대로 반환
  // 3보다 같거나 크다면 3으로 나눠서 상, 하로 움직인 횟수에 좌, 우로 움직인 횟수(3으로 나눈 후 나머지)를 더해서 반환
  return distance < 3 ? distance : Math.floor(distance / 3) + (distance % 3);
}

function solution(numbers, hand) {
  let answer = "";

  let left = 10;
  let right = 12;

  numbers.forEach((number) => {
    if ([1, 4, 7].includes(number)) {
      left = number;
      answer += "L";
    } else if ([3, 6, 9].includes(number)) {
      right = number;
      answer += "R";
    } else {
      if (number === 0) number = 11;

      const distanceL = getDistance(number - left);
      const distanceR = getDistance(number - right);

      if (distanceL > distanceR) {
        right = number;
        answer += "R";
      } else if (distanceR > distanceL) {
        left = number;
        answer += "L";
      } else {
        if (hand === "left") {
          left = number;
          answer += "L";
        } else {
          right = number;
          answer += "R";
        }
      }
    }
  });

  return answer;
}
