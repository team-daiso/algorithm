function solution(citations) {
  citations.sort((a, b) => b - a);

  for (let i = citations.length - 1; i >= 0; i--) {
    if (i >= citations[i]) citations.pop();
  }
  return citations.length;
}
