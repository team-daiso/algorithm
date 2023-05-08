function solution(today, terms, privacies) {
  let result = [];
  let termHash = {};
  const todayDate = new Date(today.replaceAll(".", "-"));
  terms = terms.map((el) => el.split(" "));
  privacies = privacies.map((el) => el.split(" "));
  terms.forEach((el) => (termHash[el[0]] = Number(el[1])));

  privacies.forEach((el, idx) => {
    let privacy = new Date(el[0].replaceAll(".", "-"));
    let final = new Date(
      privacy.setMonth(privacy.getMonth() + termHash[el[1]])
    );
    if (todayDate >= final) {
      result.push(idx + 1);
    }
  });
  return result;
}
