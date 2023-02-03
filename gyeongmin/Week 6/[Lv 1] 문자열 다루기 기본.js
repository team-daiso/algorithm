function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.search(/\D/g) < 0;
  }
  return false;
}
