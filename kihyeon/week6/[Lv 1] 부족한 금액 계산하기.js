function solution(price, money, count) {
  let root = 0;
  let addedPrice = 0;
  for (let i = 0; i < count; i++) {
    root += price;
    addedPrice += root;
  }
  return addedPrice >= money ? addedPrice - money : 0;
}
