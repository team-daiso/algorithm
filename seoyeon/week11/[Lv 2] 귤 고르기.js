function solution(k, tangerine) {
    const obj = {};
  
    // 같은 종이 몇개가 있는지 확인한다.
    tangerine.forEach((n) => {
      // obj[n] 값이 있으면 1을 더한 값을
      // obj[n] 값이 없으면 1을 넣어준다.
      obj[n] = ++obj[n] || 1;
    });
    // 결과 ex) { '1': 1, '2': 2, '3': 2, '4': 1, '5': 2}
  
    // 서로 다른 종류의 수의 최솟값을 구하기 위해서는 종류는 상관 없고 값만 필요하다.
    // Objext.values() 메서드를 통해 값만 추출 한 후
    // sort() 메서드를 이용해 내림차순으로 정렬한다.
    const kind = Object.values(obj).sort((a, b) => b - a);
    // kind = [2, 2, 2, 1, 1]
  
    let answer = 0;
      for (let el of kind) {
          if(k > 0){
              k -= el;    
              answer++;
          } else break;
      }
  
    return answer;
  }