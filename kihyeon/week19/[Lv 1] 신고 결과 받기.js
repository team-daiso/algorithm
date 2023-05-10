function solution(id_list, report, k) {
  let newReport = [...new Set(report)].map((el) => el.split(" "));
  let count = {};
  for (let el of newReport) {
    count[el[1]] = count[el[1]] ? count[el[1]] + 1 : 1;
  }
  let over = [];
  for (let el in count) {
    if (count[el] >= k) {
      over.push(el);
    }
  }
  let names = [];
  for (let i = 0; i < over.length; i++) {
    for (let j = 0; j < newReport.length; j++) {
      if (over[i] === newReport[j][1]) {
        names.push(newReport[j][0]);
      }
    }
  }

  let result = id_list.map((id) => names.filter((el) => el === id).length);

  return result;
}
