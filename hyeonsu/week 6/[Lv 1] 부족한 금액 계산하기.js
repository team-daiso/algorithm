function solution(price, money, count) {
  var answer = -1;
  // 놀이기구를 n번 이용하면 price * n 이 이용요금이 됨
  // 그렇다면 count번 탔을 때 가지고있는 금액은 얼마나 모자랄지?
  // 만약 안모자라면 0 리턴
  let firstPrice = price;
  for (let i = 2; i <= count; i++) {
    price += firstPrice * i;
  }
  price < money ? (answer += 1) : (answer += price - money + 1);
  return answer;
}
