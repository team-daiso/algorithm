function solution(k, dungeons) {
  const len = dungeons.length;

  //모든 경우의 수를 확인하기 위한 배열
  const visited = new Array(len).fill(false);
  //클리어 횟수를 확인
  let clearCnt = 0;

  //모든 경우의 수를 확인하기 위한 재귀
  function dfs(k, curCnt) {
    // 60, 1
    //현재 클리어 횟수와 전의 클리어 횟수를 비교
    clearCnt = Math.max(curCnt, clearCnt);

    for (let i = 0; i < len; i++) {
      const [minK, useK] = dungeons[i];

      //현재 피로도보다 크고 확인한적이 없다면
      if (k >= minK && !visited[i]) {
        //확인, 피로도 감소 및 카운트 증가 후 재귀
        visited[i] = true;
        dfs(k - useK, curCnt + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);

  return clearCnt;
}

/* 
  처음 피로도 80 
  
  => for문을 0부터 순회 
  
  => 0번째 인덱스에서 dfs 재귀 => dfs(60, 1) 상태에서 for문 0부터 순회 => ** 첫번째 이미 방문해서 못감 두번째 던전은 가능 => 1번째 인덱스에서 dfs 재귀 => dfs(20, 2) 상태에서 for문 0부터 순회 => 마지막 던전 외 모두 방문해서 못감 마지막 던전은 최소 피로도가 안돼서 못감 => 끝 
  
  => ** 시점에서 두번째 던전 끝나고 세번째 던전 방문 => dfs(50, 2) 상태에서 0부터 순회 => 첫번째 던전은 이미 방문했고 두번째 던전은 방문도 안했고 최소 필요 피로도도 맞춰서 방문 가능 => 모든 던전 방문 가능
  
  ...
  
  */
