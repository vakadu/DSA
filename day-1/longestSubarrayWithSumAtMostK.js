// Given an array of positive integers nums and an integer k,
// return the length of the longest contiguous subarray such that the sum ≤ k.

function longestSubarrayWithSumAtMostK(nums, k) {
  // your code here
  let i=0,j=0,sum=0,max=0;

  while(j<nums.length) {
    sum += nums[j];

    while(sum > k) {
        sum -= nums[i];
        i++;
    }

    max = Math.max(max, j-i+1)
    j++;
  }

  return max;
}

// Example:
console.log(longestSubarrayWithSumAtMostK([1, 2, 1, 0, 1, 1, 0], 4)); // Output: 5
