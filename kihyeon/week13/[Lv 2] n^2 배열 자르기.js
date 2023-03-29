function solution(n, left, right) {
  return [true].reduce((result, _) => {
    for (let idx = left; idx <= right; idx++) {
      result.push(Math.max(idx % n, Math.floor(idx / n)) + 1);
    }
    return result;
  }, []);
}
