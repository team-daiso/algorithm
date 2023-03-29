function solution(progresses, speeds) {
  // 진도가 100일때만 배포가능
  // 뒤에있는 기능이 앞에 기능보다 먼저 개발 가능
  // 근데 배포는 앞에 기능에 맞춰야 함
  // progresses 는 작업의 진도 speeds는 작업 속도
  // 각 배포마다 몇개의 기능이 배포되는 지
  const answer = [];
  const days = [];
  progresses.forEach((progress, idx) => {
    days[idx] = Math.ceil((100 - progress) / speeds[idx]);
  });
  console.log(days);
  let deployCount = 1;
  let formerWork = days[0];
  for (let i = 1; i <= days.length - 1; i++) {
    if (formerWork >= days[i]) {
      deployCount++;
    } else {
      answer.push(deployCount);
      deployCount = 1;
      formerWork = days[i];
    }
  }
  answer.push(deployCount);
  return answer;
}
