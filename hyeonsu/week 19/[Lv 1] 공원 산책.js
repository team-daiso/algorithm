function solution(park, routes) {
  // [park에서 몇번째 인덱스인지, 요소 중 몇번째 인덱스인지]
  // N은 park에서 인덱스 이동
  // E는 요소 내부에서 이동
  // S는 park에서 인덱스 이동
  // W는 요소 내부에서 이동

  // X에 막히면 그냥 다음 명령
  // park.length(세로 길이, 즉 N,S)나 park[0].length(가로길이, 즉, E,W)를 벗어나도 안됨

  // 현위치 answer
  const answer = [];
  const height = park.length - 1;
  const width = park[0].length - 1;
  for (let el of park) {
    if (el.includes("S")) {
      answer.push(park.indexOf(el));
      answer.push(el.indexOf("S"));
      break;
    }
  }
  for (let route of routes) {
    const [direction, stringDistance] = route.split(" ");
    const distance = Number(stringDistance);
    const [y, x] = answer;
    for (let i = 1; i <= distance; i++) {
      const [movedy, movedx] = answer;
      switch (direction) {
        //
        case "N":
          if (y - distance >= 0) {
            if (park[movedy - 1][movedx] === "X") {
              answer[0] = y;
              i = distance;
            } else {
              answer[0] -= 1;
            }
          }
          break;
        case "S":
          if (y + distance <= height) {
            if (park[movedy + 1][movedx] === "X") {
              answer[0] = y;
              i = distance;
            } else {
              answer[0] += 1;
            }
          }
          break;
        case "W":
          if (x - distance >= 0) {
            if (park[movedy][movedx - 1] === "X") {
              answer[1] = x;
              i = distance;
            } else {
              answer[1] -= 1;
            }
          }
          break;
        case "E":
          if (x + distance <= width) {
            if (park[movedy][movedx + 1] === "X") {
              answer[1] = x;
              i = distance;
            } else {
              answer[1] += 1;
            }
          }
          break;
      }
    }
  }
  return answer;
}
