function solution(babbling) {
  let answer = 0;
  const sounds = ["aya", "ye", "woo", "ma"];

  for (bab of babbling) {
    for (let sound of sounds) {
      if (bab.length < 2 || bab.includes(sound.repeat(2))) {
        break;
      }
      bab = bab.split(sound).join(" ");
    }
    if (bab.split(" ").join("").length === 0) answer++;
  }
  return answer;
}
