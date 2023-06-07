function solution(n, k) {
  let result = 0;
  const arr = n.toString(k).split("0");

  function isPrime(num) {
    if (num === 1 || num === 0) return false; // Number('') === 0
    if (num === 2) return true;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  arr.forEach((el) => (isPrime(Number(el)) ? result++ : 0));
  return result;
}
