function solution(name, yearning, photo) {
  let Missyou = {};
  for (let i = 0; i < name.length; i++) {
    Missyou[name[i]] = yearning[i];
  }
  return photo.map((arr) => {
    return arr
      .map((el) => {
        return name.includes(el) ? Missyou[el] : 0;
      })
      .reduce((acc, cur) => acc + cur, 0);
  });
}
