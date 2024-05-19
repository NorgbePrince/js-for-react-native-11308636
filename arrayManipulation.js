function processArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] * arr[i]);
    } else {
      result.push(arr[i] * 3);
    }
  }
  return result;
}


function formatArrayStrings(strArr, numArr) {
  for (let i = 0; i < strArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      strArr[i] = strArr[i].toUpperCase();
    } else {
      strArr[i] = strArr[i].toLowerCase();
    }
  }
  return strArr;
}