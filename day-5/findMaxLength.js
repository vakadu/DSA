// Given a binary array nums (only 0s and 1s), find the length of the longest contiguous subarray with equal number of 0 and 1.

function findMaxLength(nums) {
  // your code here
  let map = new Map(), max = 0, j=0, sum=0;
  map.set(0,-1)
  debugger
  while(j<nums.length) {
    sum += nums[j] === 0 ? -1 : 1;

    if(map.has(sum)) {
        max = Math.max(max, j-map.get(sum))
    } else {
        map.set(sum, j)
    }

    j++
  }

  return max
}

// Example:
console.log(findMaxLength([0, 1])); // Output: 2
// console.log(findMaxLength([0, 1, 0])); // Output: 2

