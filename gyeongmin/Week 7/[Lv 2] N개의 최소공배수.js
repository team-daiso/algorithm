function solution(arr) {
  //최대공약수 구하기
  const gcd = (a, b) => {
    while (b > 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  return arr.reduce((a, c) => (a * c) / gcd(a, c));
}
