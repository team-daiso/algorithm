function solution(X, Y) {
  const regExp = /[1-9]/g;
  let pair = [];

  const xGroup = grouping(X);
  const yGroup = grouping(Y);

  for (let key in xGroup) {
    if (yGroup[key]) {
      const num = Math.min(xGroup[key], yGroup[key]);

      for (let i = 0; i < num; i++) {
        pair.push(key);
      }
    }
  }

  if (pair.length === 0) return '-1';
  if (!regExp.test(pair)) return '0';

  return pair.sort((a, b) => b - a).join('');
}

function grouping(str) {
  return [...str].reduce((acc, cur, i) => {
    acc[cur] = ++acc[cur] || 1;
    return acc;
  }, {});
}
