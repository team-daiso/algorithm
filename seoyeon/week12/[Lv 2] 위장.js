function solution(clothes) {
    let hash = {};
    let combiCount = 1;
    
    clothes.forEach(el =>
        hash[el[1]] = ++hash[el[1]] || 1
    );
    
    for (const [key, value] of Object.entries(hash)) {
        combiCount *= value + 1;
				// 여기서 조합 공식이 안보이는 이유는! 의상 종류별로 하나만 골라 입어야 해서
				// 예를 들어 4개중 1개만 입는 경우의 수는 4*3*2*1/(3*2*1)*(1) 로 r의 값이 1이라서 n-r덕분에 계산값은 value가 된다!
				// 같은 옷 종류중에서는 하나만 입을 수 있으니까 v 자체가 종류별 입을수 있는 경우의 수이다.
                // 1을 더하는 이유는 안입는 경우를 더해준것
				// combiCount에 곱하는 이유는 옷 종류별 경우의 수를 다 곱해줘야 하기때문이다.
    }
    
    return combiCount - 1;
		// 1을 빼주는 이유는 최소 1개는 입는다고 하여, 아무것도 안입은 경우를 빼주는 것이다.
} 