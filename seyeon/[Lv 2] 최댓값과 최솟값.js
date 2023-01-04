function solution(s) {
  const arr = s.split(" ").sort((a, b) => a - b);

  return `${arr[0]} ${arr[arr.length - 1]}`;
}
// sort없이 Math.max, Math.min을 사용하는 것이 성능 면에서 우수
