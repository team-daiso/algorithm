function solution(clothes) {
    // 서로 다른 옷의 조합의 수를 반환
    const types = {};
    let count = 1;
    
    // 객체에 옷 종류를 키로 옷 이름을 값으로 넣어서 분류해줌
    for(let clothe of clothes){
        const [name, type] = clothe;
        
        type in types ? types[type].push(name) : types[type] = [name]
    }
    
    // {"headgear" : ["yellow_hat", "green_turban"]}라고 하면
    // headgear를 착용하지 않는 경우, yellow_hat을 쓴 경우, green_turban을 쓴 경우 총 세가지 경우가 있음
    // 옷 조합의 모든 경우의 수를 생각하기 위해 옷 종류별 경우의 수를 구하고 각 경우의 수를 곱해줌
    for(let type in types){
        count *= types[type].length + 1;
    }
    
    // 최소 한개의 의상은 입어야 하므로 아무것도 착용하지 않는 경우를 제해줌
    return count - 1;
}