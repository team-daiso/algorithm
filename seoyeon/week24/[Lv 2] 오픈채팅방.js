function solution(record) {
  const user = {};
  record.forEach((v) => {
    const [type, id, name] = v.split(" ");
    if (type != "Leave") {
      //type이 Leave일 경우엔 닉네임이 입력되지 않으므로 undefined가 obj에 담길 것이기 때문에 Leave가 아닌 경우에만 닉네임을 obj에 집어넣어 주어야 한다~
      user[id] = name;
    }
  });
  const result = [];

  record.forEach((v) => {
    const [type, id, name] = v.split(" ");
    if (type === "Enter") {
      result.push(`${user[id]}님이 들어왔습니다.`);
    } else if (type === "Leave") {
      result.push(`${user[id]}님이 나갔습니다.`);
    }
  });

  return result;
}
