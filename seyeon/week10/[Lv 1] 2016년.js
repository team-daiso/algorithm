// 풀이 1
function solution(a, b) {
  const dayOfWeek = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  let sum = 0;

  if (a <= 2) {
    sum = (a - 1) * 31 + b;
  } else {
    sum = Math.ceil((a - 1) / 2) * 31 + Math.floor((a - 1) / 2) * 30 - 1 + b;
    if (a > 7 && a % 2 === 1) sum++; // 8월부터는 짝수 달이 31일
  }

  return dayOfWeek[sum % 7];
}

// 풀이 2
function solution(a, b) {
  const dayOfWeek = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const sum = monthDays.slice(0, a).reduce((acc, cur) => acc + cur, 0) + b;

  return dayOfWeek[sum % 7];
}
