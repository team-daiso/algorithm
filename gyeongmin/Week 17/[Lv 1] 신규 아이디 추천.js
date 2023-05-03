function solution(new_id) {
    var answer = new_id;
    answer = answer
        .toLowerCase() //1단계
        .replace(/[^a-z0-9-_.]/gi, '')  //2단계
        .replace(/[.]{2,}/gi, '.')      //3단계
        .replace(/^[.]|[.]$/gi,'');     //4단계
    if(answer===''){answer='a'}         //5단계
    if(answer.length >= 16){             //6단계
    answer = answer.substring(0, 15);    //6-1단계
    answer = answer.replace(/[.]$/gi,'');   //6-2단계
      }
      while(answer.length < 3){
        answer += answer[answer.length-1];  //7단계
      }
    return answer;
}