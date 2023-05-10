function dateToNum(date) {
  return date
    .split(".")
    .map(Number)
    .reduce((acc, cur, idx) => {
      if (idx === 0) {
        return cur * 12 * 28 + acc;
      } else if (idx === 1) {
        return cur * 28 + acc;
      } else {
        return cur + acc;
      }
    }, 0);
}

function solution(today, terms, privacies) {
  const termObj = {};
  let todayDate = dateToNum(today);

  terms.map((el) => {
    let newEl = el.split(" ");
    termObj[newEl[0]] = Number(newEl[1]);
  });

  let newPri = privacies.map((el) => {
    let privacy = el.split(" ");
    let date = dateToNum(privacy[0]);
    return date + termObj[privacy[1]] * 28;
  });

  return newPri
    .map((el, idx) => (el <= todayDate ? idx + 1 : null))
    .filter((el) => !!el);
}
