function solution(s){
    s = s.toLowerCase().split("");
    
    cntP = s.filter(char => char === "p").length;
    cntY = s.filter(char => char === "y").length;
    
    return cntP === cntY
}