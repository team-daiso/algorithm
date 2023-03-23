function solution(k, score) {
    //점수를 내림차순으로 일차별로 비교하면서 k만큼 잘라내서 최소점수를 알아낸다.
let hallOfFame = [];
let rsultScore = [];

for(let el of score){
    hallOfFame.push(el);
    hallOfFame = hallOfFame.sort((a,b) => b - a).slice(0,k);
    rsultScore.push(Math.min(...hallOfFame));
}
return rsultScore;
}