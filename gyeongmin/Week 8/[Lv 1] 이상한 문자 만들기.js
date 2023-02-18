function solution(s, answer = []) {
  s.split(" ").forEach((el) => {
    answer.push(
      [...el]
        .map((word, idx) => (idx % 2 ? word.toLowerCase() : word.toUpperCase()))
        .join("")
    );
  });
  return answer.join(" ");
}
