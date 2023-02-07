function solution(price, money, count) {
  while (count !== 0) {
    money -= price * count;
    count--;
  }

  return money < 0 ? -money : 0;
}
