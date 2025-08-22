function sortedSquares(nums) {
  let i = 0,
    j = nums.length - 1,
    res = new Array(nums.length), pos = nums.length-1;

  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
        res[pos] = nums[i] * nums[i]
    //   let square = Math.pow(Math.abs(nums[i]), 2);
    //   res[j] = square
    //   res.push(square);
      i++;
    } else {
        res[pos] = nums[j] * nums[j]
    //   let square = Math.pow(Math.abs(nums[j]), 2);
    //   res[j] = square
    //   res.push(square);
      j--;
    }
    pos--;
  }

  return res;
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]
console.log(sortedSquares([1])); // [1]
console.log(sortedSquares([-1, 0, 1])); // [0, 1, 1]
