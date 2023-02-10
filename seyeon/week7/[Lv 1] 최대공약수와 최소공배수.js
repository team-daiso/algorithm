function solution(n, m) {
  const getGCD = (n, m) => {
    return n % m === 0 ? m : getGCD(m, n % m);
  };

  const gcd = getGCD(n, m);

  const getLCM = (n, m) => {
    return (n * m) / gcd;
  };

  return [gcd, getLCM(n, m)];
}

/*
유클리드 호제법

최대 공약수
a와 b의 최대 공약수 === b와 a % b의 최대 공약수
나머지가 0이 될 때까지 구하고 나면, b가 최대 공약수

최소 공배수
a * b / 최대 공약수
*/
