function solution(wallpaper) {
  let lux = [0, false];
  let rdx = 0;
  let indexs = [];
  let lastIndexs = [];

  wallpaper.forEach((el, idx) => {
    let cor = el.indexOf("#");
    if (cor !== -1 && lux[1] === false) lux = [idx, true];
    if (cor !== -1) {
      rdx = idx;
      indexs.push(cor);
      lastIndexs.push(el.lastIndexOf("#"));
    }
  });

  return [lux[0], Math.min(...indexs), rdx + 1, Math.max(...lastIndexs) + 1];
}
