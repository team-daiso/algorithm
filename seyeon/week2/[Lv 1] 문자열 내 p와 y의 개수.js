function solution(s) {
  let upper = s.toUpperCase();
  let count = 0;

  for (let letter of upper) {
    if (letter === 'P') count++;
    else if (letter === 'Y') count--;
  }

  return count === 0;
}
