function solution(ingredient) {
  const stack = [];
  let count = 0;

  ingredient.forEach((ing) => {
    stack.push(ing);

    if (stack.length >= 4 && stack.slice(-4).join("") === "1231") {
      stack.splice(stack.length - 4, 4);
      count++;
    }
  });

  return count;
}
