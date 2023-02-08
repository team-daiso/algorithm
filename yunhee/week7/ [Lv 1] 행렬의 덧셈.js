function solution(arr1, arr2) {
    return arr1.map((el, idx) => el.map((e, i) => e + arr2[idx][i]));
}