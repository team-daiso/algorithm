function solution(fees, records) {
	// 주차시간을 토대로 요금 징수
	// 시간이 기본 시간 이하면 기본 요금만 받음
	// 만약에 기본 시간 이상이면
	// 기본 요금 +
	// [ (이용 시간 - 기본 시간) / 단위시간 ] * 단위 요금 해줌 (나눠 떨어지지 않으면 올림해줌)
	const answer = [];
	const report = {};
	records.forEach(el => {
		let [time, number, method] = el.split(" ");
		const [hour, minutes] = time.split(":");
		time = hour * 60 + Number(minutes);
		if (!report[number]) {
			report[number] = { time: 0, number };
		}
		report[number].method = method;

		if (method === "OUT") {
			report[number].time += time - report[number].lastInTime;
		}
		report[number].lastInTime = time;
	});

	return Object.values(report)
		.sort((a, b) => a.number - b.number)
		.map(v => {
			// 차량이 최종적으로 나가지 않았을 때
			if (v.method == "IN") {
				v.time += 1439 - v.lastInTime;
			}

			// 기본시간을 넘지 않았을 때
			if (fees[0] > v.time) {
				return fees[1];
			}

			return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3];
		});
}
