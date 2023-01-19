function solution(s) {
  let count = 0;
  let zero = 0;

  const trans = (str) => {
    let arr = str.split("");
    zero += arr.filter((el) => el === "0").length;
    return Number(arr.filter((el) => el !== "0").join("").length).toString(2);
  };

  while (s !== "1") {
    s = trans(s);
    count++;
  }
  return [count, zero];
}
