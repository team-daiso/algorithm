function solution(n, lost, reserve) {
    let count = n - lost.length;
    
    // 정렬해주는 이유는.. 5,[4,2],[3,5] 인 경우 4한테 3이 빌려주면 2는 5한테 빌릴수 없음... 2한테 3이 빌려주고, 4한테 5가 빌려주도록 해야함
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    let reserveBox = []; // 여분을 가지고 있는 학생 담는 박스 -> for문을 돌리는 reserve가 변하지 않아야 되서 따로 선언하여 도둑맞지 않은 여벌학생을 넣어줌
    
    //여벌 가져온 학생이 도난당한경우, 그 학생을 lost에서 제거
    for(let el of reserve){
        let lostIdx = lost.indexOf(el);
        if(lostIdx != -1){ // el이 lost에 포함될때
            lost.splice(lostIdx,1);
            count++;
        }else reserveBox.push(el);
    }
    
    // 나머지 빌려줄 수 있는 경우
    for(let a of reserveBox){
        for(let b of lost){
            if(a + 1 === b || a - 1 === b){
                count++;
                lost.shift();
            }
        }
    }
    
    return count;
}