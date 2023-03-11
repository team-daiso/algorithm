function solution(food) {
  // 한쪽만 먼저 구해주고 나머지는 0 넣고 뒤집어주기
  let answer = "";
  food.map((el, idx) => {
    answer += `${idx}`.repeat(Math.floor(el / 2));
  });
  answer = answer + 0 + [...answer].reverse().join("");
  return answer;
}
