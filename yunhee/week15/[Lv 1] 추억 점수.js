function solution(names, yearning, photos) {
    // 사진 속 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수
    const people = {};
    
    names.forEach((name, i) => people[names[i]] = yearning[i]);
    
    return photos.map(photo => photo.reduce((acc, cur) => acc + (people[cur] || 0), 0));
}