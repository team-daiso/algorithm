function solution(a, b, n) {
  // 빈병 2개를 가져다주면 콜라 1개를 줌
      // 빈병 20개를 가져다주면 콜라는 몇개?
  // 보유중인 빈 병이 2개 미만이면 콜라를 받을 수 없다.
  // 빈병 a개를 주면 콜라 b병을 주는 가게에 n개의 빈 병을 가져다주면?
  
  // 재귀
  // n/a의 몫을 구함
  // n%a + (n/a) * b 가 빈병의 개수가 됨 = 새로운 n이 됨
  if(n<a) return 0;
  const cola = Math.floor(n/a) * b;
  const emptyBottle = (n%a) + cola;
  return cola + solution(a, b, emptyBottle);
}