function solution(number, limit, power) {
  // number 기사단원의 수. 1~number
  // 받은 번호의 약수의 개수에 해당하는 공격력의 무기를 가진다.
  // limit 공격력 제한수치
  // power 제한 수치를 초과한 애가 사용할 무기의 공격력
  // answer 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게

  // 각 기사들이 가진 무기의 공격력
  const damages = [];
  const knights = Array.from({ length: number }, (_, idx) => idx + 1);
  knights.forEach(knight => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(knight); i++) {
      if (knight % i === 0) {
        count++;
        if (i !== knight / i) {
          count++;
        }
      }
    }
    damages.push(count);
  });
  damages.forEach((damage, idx) => {
    damages[idx] = damage <= limit ? damage : power;
  });
  return damages.reduce((acc, cur) => acc + cur, 0);
}
