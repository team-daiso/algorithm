function solution(records) {
  // 채팅방에서 닉네임을 변경하는 방법 : 채팅방을 나간 후 새로운 닉네임으로 재입장, 채팅방에서 닉네임을 변경
  // 닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경
  // 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return
  const msgs = [];
  const nicknames = {};

  for (let record of records) {
    const [command, id, nickname] = record.split(" ");

    if (command !== "Leave") nicknames[id] = nickname;

    if (command === "Change") continue;
    else
      msgs.push([
        id,
        `님이 ${command === "Enter" ? "들어왔습니다." : "나갔습니다."}`,
      ]);
  }

  return msgs.map((msg) => nicknames[msg[0]] + msg[1]);
}
