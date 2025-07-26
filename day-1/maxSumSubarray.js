// Given an array of integers nums and an integer k,
// return the maximum sum of any contiguous subarray of size k.

function maxSumSubarray(nums, k) {
  // your code here
  let i=0, j=0, max=0, sum=0;

  for (let index = 0; index < k; index++) {
    const element = nums[index];
    sum += element
  }
  max = sum;
  j=k;

  while(j<nums.length) {
    sum -= nums[i];
    sum += nums[j];
    max = Math.max(sum, max)
    j++;
    i++;
  }
  
  return max;
}

// Example:
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9
