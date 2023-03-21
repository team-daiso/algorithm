function solution(dartResult) {
  let scores = [];
  const extra = {
    bonus: ['X', 'S', 'D', 'T'], // X는 더미데이터
    option: ['*', '#'],
  };

  for (let i = 0; i < dartResult.length; i++) {
    const last = scores.length - 1;
    const bonusIdx = extra.bonus.indexOf(dartResult[i]);
    const optionIdx = extra.option.indexOf(dartResult[i]);

    // 숫자일 경우
    if (!isNaN(dartResult[i])) {
      // 이번 숫자가 10일 경우
      if (dartResult[i + 1] === '0') {
        scores.push(+dartResult.slice(i, i + 2));
        i++;
      } else {
        scores.push(+dartResult[i]);
      }
      // 보너스일 경우
    } else if (bonusIdx !== -1) {
      scores[last] = Math.pow(scores[last], bonusIdx);
      // 옵션 - #(아차상)일 경우
    } else if (optionIdx) {
      scores[last] = -scores[last];
      // 옵션 - *(스타상)일 경우
    } else {
      scores[last] *= 2;
      scores[last - 1] *= 2;
    }
  }

  return scores.reduce((acc, cur) => acc + cur);
}
