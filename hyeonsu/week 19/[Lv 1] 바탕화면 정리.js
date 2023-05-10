function solution(wallpaper) {
  // 드래그의 시작점과 끝점을 담은 정수배열을 리턴하자
  // 위치 (0,0) = (세로, 가로) = (wallpaper의 인덱스, 요소에서의 인덱스)
  // ex) ".#..." = (0, 1)
  // 시작점의 세로 인덱스는 무조건 #가 처음으로 등장하는 인덱스, 가로 인덱스는 #이 젤 빨리 등장하는 인덱스
  // 끝점의 세로 인덱스는 #가 마지막으로 등장한 인덱스 + 1, 가로 인덱스는 #이 젤 멀리있는 인덱스 + 1

  let lux, luy, rex, rey;
  wallpaper.forEach((paper, idx) => {
    const paperArr = [...paper];
    const hashIndex = paperArr.indexOf("#");
    const lastHashIndex = paperArr.lastIndexOf("#") + 1;
    // lux 구하기
    if (paperArr.includes("#") && lux === undefined) {
      lux = idx;
    }
    // luy 구하기
    // idx가 0이면 일단 넣어주고
    // 그 담부터는 luy랑 hashIndex를 비교해서 hashIndex가 더 작으면 재할당
    if (paperArr.includes("#")) {
      if (idx === 0 || luy >= hashIndex || luy === undefined) luy = hashIndex;
    }
    // rex 구하기
    if (paperArr.includes("#")) rex = idx + 1;
    if (idx === 0 || rey <= lastHashIndex) rey = lastHashIndex;
  });
  return [lux, luy, rex, rey];
}
