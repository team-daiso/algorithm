// Time: 5.92 ms, Memory: 67.6 MB
function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      arr1[i][j] += arr2[i][j];
    }
  }

  return arr1;
}

// Time: 8.31 ms, Memory: 67.4 MB
function solution(arr1, arr2) {
  const result = arr1.map((arr, i) => arr.map((num, j) => num + arr2[i][j]));
  return result;
}
