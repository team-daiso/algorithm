function solution(wallpaper) {
  let result = [];
  const xIdx = [];
  const yIdx = [];
  // 배열에서 # 포함되어있는 인덱스
  // 요소 중에 #인덱스의 최솟값
  // 배열에서 # 포함되어있는 인덱스 중 가장 마지막 인덱스 + 1
  // 요소중 # 인덱스의 최댓값 + 1
  wallpaper.forEach((el, idx) => {
    if (el.includes("#")) {
      xIdx.push(idx);
    }
    if (el.indexOf("#") !== -1) {
      yIdx.push(el.indexOf("#"));
      yIdx.push(el.lastIndexOf("#"));
    }
  });
  result[0] = xIdx[0];
  result[1] = Math.min(...yIdx);
  result[2] = xIdx[xIdx.length - 1] + 1;
  result[3] = Math.max(...yIdx) + 1;
  return result;
}
