function solution(s, n) {
	let big = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	let small = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];   
  let arr = s.split("");
  let reg = /[a-z]/;
  let newArr = arr.map((el) => {
    if (el !== " ") {
      // el	이 공백이 아닌 경우
      // el이 대문자인 경우
      // el이 소문자인 경우
      if (!reg.test(el)) {
        if (big.indexOf(el) + n <= 25) {
          return big[big.indexOf(el) + n];
        } else {
          let dif = big.indexOf(el) + n - 26;
          return big[dif];
        }
      } else {
        if (small.indexOf(el) + n <= 25) {
          return small[small.indexOf(el) + n];
        } else {
          let dif = small.indexOf(el) + n - 26;
          return small[dif];
        }
      }
    } else {
      return el;
    }
  });
  return newArr.join("");
}
