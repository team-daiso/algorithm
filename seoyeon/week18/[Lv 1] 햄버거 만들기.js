function solution(ingredient) {
  let count = 0;
  let stack = [];

  for (let el of ingredient) {
    stack.push(el);

    if (stack.slice(-4).join("") === "1231") {
      stack.splice(-4);
      count++;
    }
  }
  return count;
}
