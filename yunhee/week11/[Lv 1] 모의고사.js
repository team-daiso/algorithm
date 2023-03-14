function solution(answers) {
    const result = [];
    // 수포자들의 누적 점수를 기록할 배열
    const scores = [0, 0, 0]; 
    
    // 각 수포자의 찍는 패턴
    const answerA = [1, 2, 3, 4, 5];
    const answerB = [2, 1, 2, 3, 2, 4, 2, 5];
    const answerC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === answerA[i % answerA.length]) scores[0]++;
        if(answers[i] === answerB[i % answerB.length]) scores[1]++;
        if(answers[i] === answerC[i % answerC.length]) scores[2]++;
    }
    
    // 수포자들의 점수 중 최고점
    const maxScore = Math.max(...scores);
    
    // 1번 수포자부터 얻은 점수가 최고점과 같은지 비교해서 같으면 결과 배열에 추가
    for(let i = 0; i < scores.length; i++){
        if(scores[i] >= maxScore) result.push(i+1);
    }
    
    return result;
}