function solution(answers) {
    let person1 = [];
    let person2 = [];
    let person3 = [];
    // 수포자들의 최대 문재수의 경우만큼 답변작성
    for(let i = 1; i <= Math.ceil(answers.length/5); i++){
        person1.push(1, 2, 3, 4, 5);
        person2.push(2, 1, 2, 3, 2, 4, 2, 5);
        person3.push(3, 3, 1, 1, 2, 2, 4, 4, 5, 5);
    }
    
    //수포자들이 맞춘 정답 수
    let correct = [0,0,0]
    correct[0] = person1.filter((el,i) => el === answers[i]).length;
    correct[1] = person2.filter((el,i) => el === answers[i]).length;
    correct[2] = person3.filter((el,i) => el === answers[i]).length;
    
    // 제일 많이 맞춘 정답수를 구해서 수포자들의 맞춘 정답수랑 비교해서 같은수의 수포자만 result에 push한다.
    let max = Math.max(...correct);
    let result = []
    for(let j = 0; j < 3; j++){
        if(max === correct[j]) result.push(j+1);
    }
    
    return result;
}