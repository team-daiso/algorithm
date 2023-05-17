function solution(priorities, location) {
  let order = 0;
  let target_index = location;
  let first = -1;

  while (priorities.length > 0) {
    first = priorities.shift();
    if (priorities.some((value, index) => value > first)) {
      priorities.push(first);
    } else {
      order++;
      if (target_index === 0) {
        break;
      }
    }
    if (target_index === 0) {
      target_index = priorities.length - 1;
    } else {
      target_index--;
    }
  }
  return order;
}
