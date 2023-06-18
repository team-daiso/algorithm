function solution(fees, records) {
  // 차량별로 누적 주차 요금을 계산

  const total = {}; // 차 번호 : { 머문 시간, 입차인지 출차인지, 시간 }
  const result = [];

  // 차량 별로 주차장에 얼마나 머물렀는지 계산
  records.forEach((record) => {
    const [time, carNumber, inOrOut] = record.split(" ");
    const seconds = time
      .split(":")
      .reduce(
        (acc, cur, idx) => acc + (idx === 0 ? Number(cur) * 60 : Number(cur)),
        0
      );

    if (!(carNumber in total)) total[carNumber] = { recordAcc: -seconds };
    else {
      if (inOrOut === "IN") total[carNumber].recordAcc -= seconds;
      else total[carNumber].recordAcc += seconds;
    }

    total[carNumber].recordInOrOut = inOrOut;
    total[carNumber].recordTime = time;
  });

  // 주차 요금 계산
  for (let carNumber in total) {
    let cost = fees[1];

    // 차량이 입차된 후에 출차된 내역이 없다면, 23:59에 출차된 것으로 간주
    if (total[carNumber].recordInOrOut === "IN")
      total[carNumber].recordAcc += 23 * 60 + 59;

    // 누적 주차 시간이 기본 시간을 초과하면, 기본 요금에 더해서 초과한 시간 마다 단위 요금 청구
    if (total[carNumber].recordAcc > fees[0]) {
      cost +=
        Math.ceil((total[carNumber].recordAcc - fees[0]) / fees[2]) * fees[3];
    }

    result.push([carNumber, cost]);
  }

  return result
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map((arr) => arr[1]);
}
