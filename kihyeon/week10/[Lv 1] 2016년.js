function solution(a, b) {
  const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];

  let accDays = days.reduce((acc, cur, i) => (i < a ? acc + cur : acc), 0) + b;

  return week[accDays % 7];
}

function getDayName(a, b) {
  var tempDate = new Date(2016, a - 1, b);

  return tempDate.toString().slice(0, 3).toUpperCase();
}