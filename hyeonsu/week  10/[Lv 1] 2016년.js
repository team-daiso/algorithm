function solution(a, b) {
  let count = 0;
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 1; i < a; i++) count += month[i];
  count += b;
  return day[(count + 4) % 7]; // 금요일 부터 1일 이므로
}

function solution(a, b) {
  // 2016년 1월 1일은 금요일
  // 2016년 a월 b일은 무슨 요일???
  // 2016년은 윤년 = 2월 29일이 있음
  // 1월-31일 2월-29일 3월 31일 .. 이후로 30, 31일 반복
  
  // 1월 3일이면 일요일
  // start % 7 => 7 % 7 === 0
  // days[0];
  // 지난 날 만큼 start에 더하고 % 7을 해주는 거임
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  let start = 4;
  for(let i = 1 ; i <= a - 1 ; i ++) {
      if(i < 8) {i % 2 === 1 ? start += 31 : start += 30;}
      else {
          i % 2 === 1 ? start += 30 : start += 31;
      }
      
  }
  start += b;
  if(a > 2) start -=1;
  return days[start % 7];
}