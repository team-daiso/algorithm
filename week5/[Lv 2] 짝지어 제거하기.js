function solution(s) {
  const solo = [];
  // 홀수면 짝 못지음
  if (s.length % 2 === 1) return 0;

  for (let i = 0; i < s.length; i++) {
    // solo에 쌓인 문자가 아직 순회하지 않은 문자의 수보다 크면
    // 앞으로 순회하는 모든 문자가 짝이 맞아도 결국 짝이 부족함
    if (solo.length > s.length - i) return 0;

    if (s[i] === s[i + 1]) {
      i++; // 2개 건너뛰기
      // 이번 거랑 다음 거랑 같지 않다면?
    } else {
      // 근데 solo의 마지막이랑 현재랑 같으면?
      if (solo[solo.length - 1] === s[i]) {
        solo.pop(); // 짝맞춰 제거
      } else {
        solo.push(s[i]); // 아니면 추가
      }
    }
  }

  return solo.length === 0 ? 1 : 0;
}
