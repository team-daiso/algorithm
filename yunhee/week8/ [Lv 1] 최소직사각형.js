function solution(sizes) {
    let width = 0;
    let height = 0;
    
    sizes.forEach(size => {
            // 더 작은 값을 w, 큰 값을 h에 할당
            const w = size[0] < size[1] ? size[0] : size[1];
            const h = size[0] < size[1] ? size[1] : size[0];
        
            // 현재 값보다 클 경우 재할당
            if(w > width) width = w;
            if(h > height) height = h; 
        });
    
    return width * height;
}