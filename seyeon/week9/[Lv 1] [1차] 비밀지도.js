function solution(n, arr1, arr2) {
  let result = [];

  arr1 = convertToBinary(arr1, n);
  arr2 = convertToBinary(arr2, n);

  for (let i = 0; i < n; i++) {
    let decode = '';

    for (let j = 0; j < n; j++) {
      decode += arr1[i][j] === '1' || arr2[i][j] === '1' ? '#' : ' ';
    }
    result[i] = decode;
  }

  return result;
}

function convertToBinary(arr, n) {
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i].toString(2);

    if (arr[i].length < n) {
      arr[i] = '0'.repeat(n - arr[i].length) + arr[i];
    }
  }
  return arr;
}
