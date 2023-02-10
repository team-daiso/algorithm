// process : 프로그램과 관련된 정보를 나타내는 객체 (Node.js)
// stdin : Standard input (표준 입력)

// process.stdin: stdin과 동등하거나 stdin과 연결된 Readable 스트림을 반환

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  console.log(`${'*'.repeat(a)}\n`.repeat(b));
});
