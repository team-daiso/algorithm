function solution(phone_number) {
    let startLen = phone_number.length - 4 ;
    let four = phone_number.slice(startLen, phone_number.length)
    let star = "";
    for(let i = 0; i < startLen; i++){
        star += '*'
    }
    return star + four;
}