function solution(citations) {
  // 정렬을 먼저 해줘야 하나?
  // 요소 el보다 큰 수가 el개 이상
  // 요소 el보다 작은 수가 el개 이하

  // hindex 구하는 방법
  // 인용수가 번호보다 커야 함
  // 인용수보다 작은 수가 인용수 개수 이하
  citations.sort((a, b) => b - a);
  const len = citations.length;
  let hIdx = 0;
  for (let i = 0; i <= len; i++) {
    const el = citations[i];
    // i + 1은 논문의 번호가 됨. 1부터 시작함
    // 인용수가 번호보다 크고
    // 인용수 이하로 인용된 논문의 개수보다 이 논문의 인용수가 더 많으면
    if (el >= i + 1 && el >= len - i) {
      hIdx++;
    } else {
      break;
    }
  }
  return hIdx;
}