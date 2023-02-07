function solution(n, words) {
    let answer = [0,0];
    
    for (let i = 1; i < words.length; i++){
				 // 바로 앞의 단어의 뒷 글자와 같지 않은 단어를 말하면 탈락
        if(words[i-1].slice(-1) != words[i][0]){   // 왼쪽이랑 비교되게끔 해야 한다고 함..? 이유는 모르겠슴다.
            answer[0] = (i+1) % n ? (i+1) % n : n
            answer[1] = parseInt(i/n) + 1
            return answer;
        }

				// 앞에서 말했던 단어와 같은 단어를 말하면 탈락
        if(words.indexOf(words[i]) != words.lastIndexOf(words[i])){
						// 그냥 i로 진행하게 되면 answer에 indexof로 나온 순서 i로 계산이 되니까 중복되는 마지막 인덱스로 계산
            let num = words.lastIndexOf(words[i])
            answer[0] = (num+1) % n ? (num+1) % n : n
            answer[1] = parseInt(num/n) + 1
            return answer;
        }
        
    }
    return answer;
}

//++
// solution(2, ['ac','ca','ac','ac']) 이라면 [1, 2]가 나와야 하는데...
// [2, 2] 가 나와서... 프로그래머스에서 잘 통과가 되었습니다ㅜㅠ 다시 풀어야 합니다..