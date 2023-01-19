// 풀이 1
// 정확성 테스트에서는 2보다 느리고, 효율성에서는 2보다 빠름
function solution(s) {
  const openBracket = [];

  if (s[0] === ')' || s[s.length - 1] === '(') {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      openBracket.push('open');
    } else {
      if (!openBracket.length) {
        return false;
      }
      openBracket.pop();
    }
  }

  return openBracket.length ? false : true;
}

// 풀이 2
// 정확성 테스트에서는 1보다 빠르고, 효율성에서는 1보다 느림
function solution(s) {
  let openBrackets = 0;

  if (s[0] === ')' || s[s.length - 1] === '(') {
    return false;
  }

  s.split('').map((bracket) => {
    if (bracket === '(') {
      openBrackets++;
    } else {
      if (!openBrackets) {
        return false;
      }
      openBrackets--;
    }
  });

  return !openBrackets;
}

// 근데 둘다 돌릴 때마다 가끔씩 시간초과 뜨는데 이유를 모르겠음!!!
