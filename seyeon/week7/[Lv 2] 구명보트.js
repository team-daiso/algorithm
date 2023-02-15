function solution(people, limit) {
  let count = 0;
  people.sort((a, b) => b - a);

  for (let weight of people) {
    if (weight + people[people.length - 1] <= limit) {
      people.pop();
    }
    count++;
  }

  return count;
}
