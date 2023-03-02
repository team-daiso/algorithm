function solution(n, arr1, arr2) {
  const arrOne = arr1
    .map((el) => el.toString(2))
    .map((el) => el.padStart(n, "0"));
  const arrTwo = arr2
    .map((el) => el.toString(2))
    .map((el) => el.padStart(n, "0"));

  let result = [];
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      arrOne[i][j] === "1" || arrTwo[i][j] === "1"
        ? (line += "#")
        : (line += " ");
    }
    result.push(line);
  }
  return result;
}
