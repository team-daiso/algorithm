function solution(s, skip, index) {
  const alphabets = [...'abcdefghijklmnopqrstuvwxyz'].filter(
    (alphabet) => !skip.includes(alphabet)
  );

  return [...s].reduce((acc, cur) => {
    const charIdx = alphabets.indexOf(cur) + index;
    return acc + alphabets[charIdx % alphabets.length];
  }, '');
}
