function solution(n, m, section) {
    let count = 0;
    let endPaint = 0; //어디까지 페인트를 칠했는지
      
    section.forEach((s) => {
      if (s > endPaint) {
        count++;
        endPaint = s + m - 1; //s가 2면 2,3,4,5까지 바르는 거니까 1을 빼줘야 한다
      }
    });
      
    return count;
  }