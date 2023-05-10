function solution(id_list, report, k) {
  // answer에게 통지받은 횟수를 push해준다.
  // id_list, report배열이고 k는 숫자.
  // k번 이상 신고당하면 이용 정지

  // 내가 신고를 얼마나 당했는지
  // 중복신고가 안되므로 누구를 신고했었는지도 기록
  // 누가 날 신고했는지도 기록
  const answer = [];
  const userInformation = {};
  id_list.forEach(el => {
    userInformation[el] = {
      // 신고당한 횟수
      reported: 0,
      // 누구 신고했는지
      reportUser: [],
      // 누가 날 신고했는지
      reportedBy: [],
      // 알림을 몇번 받는지
      email: 0,
    };
  });
  report.forEach(el => {
    const splitedEl = el.split(" ");
    // 신고한 유저의 reportUser 검사
    if (!userInformation[splitedEl[0]].reportUser.includes(splitedEl[1])) {
      // 신고한 유저의 신고 기록에 넣어주기
      userInformation[splitedEl[0]].reportUser.push(splitedEl[1]);
      // 신고 당한 유저의 reportedBy 에 추가해주기
      userInformation[splitedEl[1]].reportedBy.push(splitedEl[0]);
      // 신고 당한 유저의 reported 올려주기
      userInformation[splitedEl[1]].reported++;
    }
  });
  id_list.forEach(el => {
    // 만약 신고당한 유저의 리폿 수가 k 이상이면 신고한 유저의 email을 올려주기
    if (userInformation[el].reported >= k) {
      userInformation[el].reportedBy.forEach(reporter => {
        userInformation[reporter].email++;
      });
    }
  });
  Object.values(userInformation).forEach((el, idx) => {
    answer[idx] = el.email;
  });
  return answer;
}
