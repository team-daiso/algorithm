function solution(babbling) {
  const regex = /^(?:(aya|ye|woo|ma)(?!\1))*$/;
  return babbling.filter((word) => regex.test(word)).length;
}
