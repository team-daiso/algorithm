function solution(name, yearning, photo) {
    let score = {};
    
    name.forEach((el,idx) => score[el] = yearning[idx]);
    
    return photo.map(el => 
              el.reduce((acc,cur) => acc + (score[cur] ? score[cur] : 0) ,0)
			)
}