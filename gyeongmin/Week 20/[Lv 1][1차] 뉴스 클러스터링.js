function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const set1 = [];
  const set2 = [];
  const rgx = /[^A-Za-z]+/gi; //문자열외에 다른 게 있는지

  for (let i = 0; i < str1.length - 1; i++) {
    const word = str1.slice(i, i + 2);
    if (word.match(rgx) === null) set1.push(word);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const word = str2.slice(i, i + 2);
    if (word.match(rgx) === null) set2.push(word);
  }
  let list = new Set([...set1, ...set2]);
  let union = 0;
  let same = 0;
  list.forEach((item) => {
    const a = set1.includes(item) ? set1.filter((i) => i === item).length : 0;
    const b = set2.includes(item) ? set2.filter((i) => i === item).length : 0;
    union += Math.max(a, b);
    same += Math.min(a, b);
  });
  return parseInt(65536 * (union !== 0 ? same / union : 1));
}
