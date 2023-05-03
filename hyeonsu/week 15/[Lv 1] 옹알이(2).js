// gg 쳤어욤~
function solution(babbling) {
  const can = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < can.length; j++) {
      if (babble.includes(can[j].repeat(2))) {
        break;
      }

      babble = babble.split(can[j]).join(" ");
    }

    if (babble.split(" ").join("").length === 0) {
      count += 1;
    }
  }

  return count;
}
