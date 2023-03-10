function solution(nums) {
    // 선택 가능한 수
const choiceNum = nums.length / 2;
    // 포켓몬 종류
const PokemonType = new Set(nums).size; // size 접근자 속성은 Set 객체의 원소 수를 반환한다.

return choiceNum <= PokemonType ? choiceNum : PokemonType;
}