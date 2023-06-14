function solution(record) {
	// 경우의 수
	// Enter
	// 처음 들어오는 경우
	// 닉네임을 바꾸고 들어오는 경우
	// Leave - 떠나는 경우
	// Change - 채팅방에서 닉넴을 바꿈
	const user = {};
	const answer = [];
	record
		.map(el => {
			return el.split(" ");
		})
		.forEach(el => {
			const [action, uid, name] = el;
			switch (action) {
				case "Enter":
					user[uid] = name;
					answer.push(["님이 들어왔습니다.", uid]);
					break;
				case "Leave":
					answer.push(["님이 나갔습니다.", uid]);
					break;
				case "Change":
					user[uid] = name;
					break;
			}
		});
	return answer.map(el => {
		const [str, id] = el;
		return `${user[id]}${str}`;
	});
}
