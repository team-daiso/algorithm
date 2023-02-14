function solution(data) {
  const [a, b] = data.split(" ").map(Number);
  console.log(("*".repeat(a) + `\n`).repeat(b));
}

solution("5 3");
