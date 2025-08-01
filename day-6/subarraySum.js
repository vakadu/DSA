// Given an integer array nums and an integer k,
// return the total number of continuous subarrays whose sum equals to k.

function subarraySum(nums, k) {
  // your code here
  let map = new Map(),
    sum = 0, count = 0;
    map.set(0,1)

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    sum += element;

    if (map.has(sum-k)) {
        count += map.get(sum-k)
    }
    map.set(sum, map.get(sum)+1 || 1);
  }
  return count
}

// Example:
console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2
