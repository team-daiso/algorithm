function solution(k, dungeons) {
	let answer = 0;
	// 방문했는지 확인하기 위한 배열
	const visited = Array.from({ length: dungeons.length }, () => false);

	// 완전탐색을 위한 DFS(남은 피로도, 진행단계)
	function DFS(hp, L) {
		// 던전의 수 만큼 반복한다.
		for (let i = 0; i < dungeons.length; i++) {
			// 방문하지 않았고 현재 남은 피로도가 최소 필요도 보다 크거나 같으면 실행
			if (!visited[i] && dungeons[i][0] <= hp) {
				// 현재 들어온 던전을 방문 처리
				visited[i] = true;

				// DFS(현재 피로도 - 방문 던전, 진행단계 + 1)
				DFS(hp - dungeons[i][1], L + 1);

				// DFS 종료 후 방문을 끝내준다.
				visited[i] = false;
			}
		}

		// 가장 깊이 들어간 진행단계를 answer에 넣어준다.
		answer = Math.max(answer, L);
	}

	DFS(k, 0);

	return answer;
}
