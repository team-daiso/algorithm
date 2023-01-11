function solution(s) {
  var answer = false;
  s = s.toLowerCase();
  console.log(s);
  if (!s.includes("p") && !s.includes("y")) return true;
  let pCount = 0;
  let yCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") pCount++;
    if (s[i] === "y") yCount++;
  }
  if (pCount === yCount && pCount !== 0) answer = true;

  return answer;
}
