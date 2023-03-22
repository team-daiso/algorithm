function solution(clothes) {
  let answer = 1;
  const categoryObj = {};

  clothes.map((el) => {
    const category = el[1];

    !categoryObj[category]
      ? (categoryObj[category] = [el[0]])
      : categoryObj[category].push(el[0]);
  });

  for (const [key, value] of Object.entries(categoryObj)) {
    answer *= value.length + 1;
  }

  return answer - 1;
}
