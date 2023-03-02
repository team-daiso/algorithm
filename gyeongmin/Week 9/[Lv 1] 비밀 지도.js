function solution(n, arr1, arr2) {
  //한변의 길이가 n
  //벽('#'): 1, 공백(''): 0
  //둘다 공백이어야 공백
  //10진수 arr를 2진수 arr로 변환
  function parse(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toString(2).padStart(arr.length, "0");
    }
    return arr;
  }
  //arr1, arr2를 더해서 sumArr에 넣기.
  let sumArr = [];
  for (let i = 0; i < n; i++) {
    sumArr.push(
      String(Number(parse(arr1)[i]) + Number(parse(arr2)[i])).padStart(n, "0")
    );
  }
  //비밀지도라인들을 arr로 만들었다가 join시키고 answer로 하나씩 넣기
  return sumArr.map((el) =>
    String([...el].map((x) => (x >= 1 ? "#" : " ")).join(""))
  );
}
