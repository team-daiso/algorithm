function solution(str, skips, index) {
  const alphabet = [];

  for (let i = 97; i < 123; i++) {
    const char = String.fromCharCode(i);

    if (!skips.includes(char)) alphabet.push(char);
  }

  return [...str]
    .map((s) => alphabet[(alphabet.indexOf(s) + index) % alphabet.length])
    .join("");
}
