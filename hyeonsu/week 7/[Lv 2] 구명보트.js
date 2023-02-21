function solution(people, limit) {
  // 한번에 최대 2명씩

  // Ex)
  // 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]
  // 구명보트의 무게 제한이 100kg
  // 2번 4번은 같이 탈 수 있음
  // 이 경우 보트는 3개 필요함

  // 베스트는 순서대로 세워놓고 (작은놈 + 큰놈) 이 조합으로 limit을 넘나 안넘나를 검사해주는게 best
  // 만약 안넘으면 앞뒤로 뺴주고
  // 넘으면 뒤에놈만 뺴주고.. 왜냐면 뒤가 젤 큰데 젤 작은애랑 같이 못타면 얜 어차피 혼자타야함
  // 이런식으로 length = 0이 될때까지 반복해준다~

  if (people.length === 1) return 1;

  let TotalBoats = 0;
  people.sort((a, b) => a - b);

  while (people.length !== 0) {
    if (people[0] + people[people.length - 1] <= limit) {
      people.shift();
    }
    TotalBoats++;
    people.pop();
  }
  return TotalBoats;
}
