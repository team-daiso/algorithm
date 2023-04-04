// (〃⌒⤙⌒)ゞ 제가 푸러써욥~~
function solution(n, lost, reserve) {
  // 학생들은 체격 순으로 번호 매겨짐
  // 바로 앞이나 뒷번호의 학생에게 빌려줌
  // n = 전체 학생 수
  // lost = 잃어버린 학생 배요ㅕㄹ
  // reserve = 예약있는 학생 배열

  // 배열 만들기
  // 각 요소는 idx+1번 학생이 가진 체육복 개수
  // 배열의 요소가 0일 때마다 n을 차감하고 시작함
  // 만약 전의 요소나 다음 요소가 2일 경우 해당 요소를 --하고
  // n++ 해준다.
  // n을 반환한다.

  const students = Array.from({ length: n }, (_, i) => {
    let sweatSuit = 1;
    lost.includes(i + 1) && sweatSuit--;
    reserve.includes(i + 1) && sweatSuit++;
    return sweatSuit;
  });
  students.forEach((student, idx) => {
    if (student === 0) {
      n--;
      if (students[idx - 1] === 2) {
        students[idx - 1]--;
        n++;
      } else if (students[idx + 1] === 2) {
        students[idx + 1]--;
        n++;
      }
    }
  });
  return n;
}

function solution(n, lost, reserve) {
  // 학생들은 체격 순으로 번호 매겨짐
  // 바로 앞이나 뒷번호의 학생에게 빌려줌
  // n = 전체 학생 수
  // lost = 잃어버린 학생 배요ㅕㄹ
  // reserve = 예약있는 학생 배열
  if (n === 2) return 2;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let answer = n - lost.length;
  let start = 0;
  reserve.map(el => {
    if (lost.includes(el)) return;
    const num = lost[start];
    if (el + 1 === num || el - 1 === num) {
      answer++;
      start++;
    }
  });
  return answer;
}
