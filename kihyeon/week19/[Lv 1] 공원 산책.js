function solution(park, routes) {
  let cor = [0, 0];
  const routesArr = routes.map((el) => el.split(" "));

  // 로봇의 시작 좌표 찾기
  park.forEach((el, idx) => {
    if (el.includes("S")) {
      cor = [idx, el.indexOf("S")];
    }
  });

  for (let route of routesArr) {
    const [direction, _distance] = route;
    const distance = Number(_distance);
    let applyFlag = true;
    let newCor = [...cor];

    for (let i = 1; i <= distance; i++) {
      switch (direction) {
        case "N":
          newCor[0] -= 1;
          break;
        case "E":
          newCor[1] += 1;
          break;
        case "S":
          newCor[0] += 1;
          break;
        case "W":
          newCor[1] -= 1;
          break;
      }

      // 공원 범위 밖으로 나가거나 장애물을 만나면 해당 명령은 무시
      if (
        newCor[0] < 0 ||
        newCor[0] >= park.length ||
        newCor[1] < 0 ||
        newCor[1] >= park[0].length ||
        park[newCor[0]][newCor[1]] === "X"
      ) {
        applyFlag = false;
        break;
      }
    }
    if (applyFlag) cor = [...newCor];
  }

  return cor;
}
