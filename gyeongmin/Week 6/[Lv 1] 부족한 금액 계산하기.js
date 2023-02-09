//첫번째
function solution(price, money, count, need = 0) {
  for (let i = 1; i <= count; i++) {
    need += price * i;
  }
  return need <= money ? 0 : need - money;
}

//두번째
function solution(price, money, count) {
  const need = [...Array(count)]
    .map((x, i) => (x = price * (i + 1)))
    .reduce((acc, cur) => acc + cur);

  return need <= money ? 0 : need - money;
}
