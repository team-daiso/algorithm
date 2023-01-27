function getCountOfOne(n) {
  return [...n.toString(2)].filter((el) => el === '1').length;
}

function solution(n) {
  const nCount = getCountOfOne(n);
  let nextNum = n;
  let nextNumCount = 0;

  while (nextNumCount !== nCount) {
    nextNum++;
    nextNumCount = getCountOfOne(nextNum);
  }

  return nextNum;
}
