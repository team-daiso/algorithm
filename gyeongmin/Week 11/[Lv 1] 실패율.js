function solution(N, stages) {
  //유저 수
  let user = stages.length;
  //각 스테이지별 존재하는 사람수 배열
  let stageHasUser = Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    stages.forEach((el) => {
      if (el === i + 1) stageHasUser[i]++;
    });
  }
  // console.log(stageHasUser) //[ 1, 3, 2, 1, 0 ]
  //실패율구하기
  let falseArr = []; //[[스테이지, 실패율]...]
  //첫번째 스테이지에 있는사람/stages.length
  //두번째부터는 현재 스테이지에 있는 사람/stages.length-전스테이지에있는사람
  for (let i = 0; i < stageHasUser.length; i++) {
    let idxArr = [];
    idxArr.push(i + 1, stageHasUser[i] / user);
    falseArr.push(idxArr);
    user -= stageHasUser[i];
  }
  //실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열 리턴
  falseArr.sort((a, b) => b[1] - a[1]);

  return falseArr.map((x) => x[0]);
}
