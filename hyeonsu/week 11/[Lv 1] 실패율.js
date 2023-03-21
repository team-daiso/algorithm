function solution(N, stages) {
  // 실패율 = 스테이지에 도착해서 클리어 못한 사람 / 도착한 사람
  // 몇명이 깼니?

  // N은 전체 스테이지 개수
  // stages는 유저들이 멈춰있는 스테이지
  // 즉 stages.length는 유저 수
  // 단 stages의 요소 중 N+1 은 겜을 다 깬 유저이다!

  // 실패율이 높은 스테이지부터 내림차순으로~

  // 5, [2, 1, 2, 6, 2, 4, 3, 3]
  // stage1 = 1 / 8;
  // stage2 = 3 / 7;
  // stage3 = 2 / 4;
  // stage4 = 1 / 2;
  // stage5 = 0;

  // [3 4 2 1 5]

  // 실패율은 어케 구하나?
  // for(let i = 1 ; i <= N ; i ++)
  // 1 이 몇개인지? / 1 이상인 수의 개수
  // 2 이 몇개인지? / 2 이상인 수의 개수
  // 3 이 몇개인지? / 3 이상인 수의 개수
  // 4 이 몇개인지? / 4 이상인 수의 개수
  // 5 이 몇개인지? / 5 이상인 수의 개수
  const answer = [];
  const failures = [];

  for (let i = 1; i <= N; i++) {
    let numerator = 0;
    let denominator = 0;
    for (j = 0; j < stages.length; j++) {
      if (i <= stages[j]) {
        denominator++;
      }
      if (i === stages[j]) {
        numerator++;
      }
    }
    if (denominator === 0) {
      denominator = stages.length;
    }
    failures.push(numerator / denominator);
  }
  const originalFailure = [...failures];
  failures
    .sort((a, b) => b - a)
    .map(failure => {
      answer.push(originalFailure.indexOf(failure) + 1);
      originalFailure.splice(originalFailure.indexOf(failure), 1, undefined);
    });

  return answer;
}
