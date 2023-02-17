function solution(people, limit) {
  let twoPeople = 0;
  // 사람을 무게순으로 오름차순 정렬
  let sortedPeople = people.sort((a, b) => a - b);
  // 가장 가벼운 사람의 인덱스
  let leftIdx = 0;
  // 가장 무거운 사람의 인덱스
  let rightIdx = sortedPeople.length - 1;
  while (leftIdx < rightIdx) {
    // 가장 가벼운 사람과 무거운 사람의 합이 limit 보다 작거나 같으면 2명을 한번에 나를 수 있다
    if (sortedPeople[leftIdx] + sortedPeople[rightIdx] <= limit) {
      // 다음 사람을 확인하기 위해 가장 가벼운 사람과 무거운 사람을 가리키는 인덱스를 옮겨주고
      // 한번에 2명을 옮길 수 있는 보트 수를 +1 해준다
      leftIdx++;
      rightIdx--;
      twoPeople++;
    } else {
      // 위 조건에 맞지 않는 경우는 한번에 한 명만 나를 수 있는 경우이기 때문에
      // 가장 무거운 사람의 인덱스만 옮겨준다
      rightIdx--;
    }
  }
  // 전체 사람의 수에서 한번에 2명를 나를 수 있는 경우를 빼 주면 총 필요한 보트의 개수를 구할 수 있다
  return people.length - twoPeople;
}
