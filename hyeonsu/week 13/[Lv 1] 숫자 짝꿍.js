function solution(X, Y) {
  // X 하고 Y에서 공통으로 나타나는 정수 k 들을 이용해 가장 큰 숫자 만들기
  // "15236355" 과 "71309348"
  // 제가푼거 아님다..

  const ks = {};
  let answer = "";
  [...X].forEach(el => {
    ks[el] = 0;
  });
  [...Y].forEach(el => {
    ks[el] === undefined ? (ks[el] = 0) : ks[el]++;
  });

  Object.keys(ks)
    .sort((a, b) => b - a)
    .forEach(k => {
      answer += k.repeat(ks[k]);
    });
  answer.length === 0 && (answer = "-1");
  return answer[0] === "0" ? "0" : answer;
}
