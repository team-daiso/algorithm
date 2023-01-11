function solution(s) {
  // 단어로 split
  return s
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join(" ");
}
