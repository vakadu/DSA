function minSubArrayLen(target, nums) {
  // your code
  let i = 0,
    j = 0,
    sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  while (j < nums.length) {
    sum += nums[j];
    if (sum < target) {
      j++;
    } else {
      while (sum >= target) {
        min = Math.min(min, j - i + 1);
        sum -= nums[i];
        i++;
      }
      j++;
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// Expected output: 2
// Explanation: subarray [4,3] has sum 7 and is of minimal length

console.log(minSubArrayLen(4, [1,4,4])); 
// Expected output: 1
// Explanation: [4] satisfies the condition

console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); 
// Expected output: 0

console.log(minSubArrayLen(15, [1,2,3,4,5])); 
// Expected output: 5
// Explanation: Only full array adds up to 15

console.log(minSubArrayLen(8, [2,3,1,2,4,3])); 
// Expected output: 3
// Explanation: [4,3,1] or [3,1,4] but [4,3] doesn’t work since it’s only 7

