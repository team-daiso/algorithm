function solution(clothes) {
  // 스파이는 매일 다른 옷을 조합해서 입어야 함
  // clothes는 2차원 배열임
  // 각 행은 의상의 이름, 의상의 종류
  // 1 <= clothes.length <=30
  // 스파이는 최소 하나씩은 입는다~
  // 서로 다른 옷의 조합의 수

  // 우선 입을 수 있는 경우의 수 자체는 (종류의 수)!임
  // 3개 종류 옷이면
  // 3개씩 2개씩 1개씩
  // 같은 종류의 옷을 입지는 않음..
  let answer = 1;
  if (clothes.length === 1) return 1;
  // 옷의 종류 가짓수를 세어줄 객체
  const categories = {};
  // 옷의 종류 가짓수를 세어줌
  clothes.map(dress => {
    if (!(dress[1] in categories)) {
      categories[dress[1]] = 1;
    } else {
      categories[dress[1]]++;
    }
  });
  const values = Object.values(categories);
  // hash_table = {종류1: n, 종류2: m, 종류3: k, 종류4: p} 이렇게 주어졌다면
  // (nC1 + 1) x (mC1 + 1) x (kC1 + 1) x (pC1 + 1) - 1
  values.map(value => {
    answer = answer * (value + 1);
  });
  return answer - 1;
}
