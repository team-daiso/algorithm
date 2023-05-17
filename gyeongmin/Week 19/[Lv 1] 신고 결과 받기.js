function solution(id_list, report, k) {
  let result = {};
  id_list.forEach((id) => (result[id] = 0));
  let report_list = {};
  id_list.forEach((id) => (report_list[id] = []));

  report.forEach((list) => {
    const [user, reported] = list.split(" ");
    if (!report_list[reported].includes(user)) {
      report_list[reported].push(user);
    }
  });

  for (key in report_list) {
    if (report_list[key].length >= k) {
      for (user of report_list[key]) {
        result[user]++;
      }
    }
  }
  return Object.values(result);
}
