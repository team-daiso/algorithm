function solution(people, limit, answer = 0) {
  people.sort((a, b) => a - b); //[50,50,70,80]
  let lIdx = 0;
  let rIdx = people.length - 1;

  while (lIdx < rIdx) {
    let sum = people[lIdx] + people[rIdx];
    if (sum > limit) {
      rIdx--;
    } else {
      rIdx--;
      lIdx++;
    }
    answer++;
  }
  if (lIdx == rIdx) answer++;
  return answer;
}
