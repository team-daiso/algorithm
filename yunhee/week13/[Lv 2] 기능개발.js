function solution(progresses, speeds) {
    // 각 기능은 진도가 100%일 때 서비스에 반영된다
    // 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다
    const answer = [];
    
    while(progresses.length > 0){
        // 가장 앞에 있는 기능이 개발되었을 경우
        if(progresses[0] >= 100){
            let count = 0;
            
            // 앞에서부터 개발이 진행된 기능 개수 체크
            for(let progress of progresses){
              if(progress >= 100) count++;
              else break;
            }
            
            // 배포된 기능을 제외한 배열을 재할당
            progresses = progresses.slice(count);
            speeds = speeds.slice(count);
            
            // 배포 당 몇개의 기능이 개발되었는지 answer에 추가 
            answer.push(count);
          
            continue;
        }
        
        // 가장 앞에 있는 기능이 개발되지 않았을 경우
        // 맨 앞 기능의 작업 완료까지 남은 날짜 계산
        const days = Math.ceil((100 - progresses[0]) / speeds[0]);
        
        // 계산한 날짜를 모든 기능의 작업 진도에 더함
        for(let i = 0; i < progresses.length; i++){
          progresses[i] += (speeds[i] * days);
        }
    }
    
    return answer;
}