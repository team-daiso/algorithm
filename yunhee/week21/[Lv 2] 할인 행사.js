function solution(wants, number, discount) {
  let result = 0;

  const total = wants.reduce((acc, cur, idx) => {
    acc[cur] = number[idx];
    return acc;
  }, {});

  outside: for (let i = 0; i < discount.length; i++) {
    const slicedDiscount = discount.slice(i, i + 10);

    for (let want in total) {
      if (
        !slicedDiscount.includes(want) ||
        slicedDiscount.filter((dis) => dis === want).length < total[want]
      ) {
        continue outside;
      }
    }

    result++;
  }

  return result;
}
