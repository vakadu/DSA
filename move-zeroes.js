function moveZeroes(arr) {
  let i = 0,
    j = 0;

  while (j < arr.length) {
    if (arr[j] !== 0) {
      if (arr[i] === 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    i++;
    }
    j++;
  }

  return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
