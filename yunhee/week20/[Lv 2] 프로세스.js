function solution(priorities, location) {
  let max = Math.max(...priorities);
  let order = 0;

  priorities = priorities.map((priority, index) => [index, priority]);

  while (priorities.length > 0) {
    const [index, priority] = priorities.shift();

    if (priority === max) {
      order++;

      if (index === location) return order;
      else max = Math.max(...priorities.map((pri) => pri[1]));
    } else {
      priorities.push([index, priority]);
    }
  }
}
