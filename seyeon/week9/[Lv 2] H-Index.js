function solution(citations) {
  let result = citations.length;
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    const moreCitedPaper = citations.length - i - 1;
    // 현재 인용 수보다 더 많이 인용된 논문 수가 적거나 같을 때
    if (citations[i] <= moreCitedPaper) {
      result = moreCitedPaper;
    }
  }

  return result;
}
