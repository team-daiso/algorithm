function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      [...word]
        .map((letter, idx) =>
          idx % 2 ? letter.toLowerCase() : letter.toUpperCase()
        )
        .join("")
    )
    .join(" ");
}

solution("try hElLo world");
