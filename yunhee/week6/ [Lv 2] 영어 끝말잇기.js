function solution(n, words) {
    // 순서대로 단어를 말한다. 마지막 사람 다음은 첫번째 사람이다.
    // 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 한다.
    // 이전에 등장했던 단어는 사용할 수 없다. 한 글자인 단어는 인정되지 않는다.
    // 가장 먼저 탈락하는 사람의 번호와 몇번째 차례에 탈락하는지 구해라
    const memory = [];
    
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        const lastMemory = memory[memory.length-1];
        
        // 한 글자인 단어를 말하면 탈락, 이전에 등장했던 단어라면 탈락, 앞사람 단어의 마지막 글자와 이어지지 않으면 탈락
        if(word.length < 2 
           || memory.indexOf(word) > -1 
           || (memory.length > 0 && word[0] !== lastMemory[lastMemory.length-1])
          ) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        // 통과일 경우 memory 배열에 담음
        else memory.push(words[i]);
    }
    
    return [0, 0];
}