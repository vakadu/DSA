function longestSubarray(nums) {
  let i = 0,
    j = 0,
    max = 0,
    zeroCount = 0;

  while (j < nums.length) {
    if (nums[j] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[i] === 0) {
        zeroCount--;
      }
      i++;
    }

    max = Math.max(max, j-i)

    j++;
  }

  return max;
}

console.log(longestSubarray([1, 1, 0, 1])); // → 3
console.log(longestSubarray([0,1,1,1,0,1,1,0,1])); // → 5
console.log(longestSubarray([1,1,1])); // → 2
