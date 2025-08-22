function longestSubarray(nums, limit) {
  // your code here
  let i=0, j=0, result=0, minDq=[], maxDq=[];

  while(j<nums.length) {
    let current = nums[j];

    while(maxDq.length && nums[maxDq[maxDq.length -1]] < current) {
        maxDq.pop()
    }
    maxDq.push(j);

    while(minDq.length && nums[minDq[minDq.length-1]] > current) {
        minDq.pop()
    }
    minDq.push(j)

    while(minDq.length && maxDq.length && (nums[maxDq[0]] - nums[minDq[0]]) > limit){
        if(nums[i] === nums[maxDq[0]]) {
            maxDq.shift()
        }
        if(nums[i] === nums[minDq[0]]) {
            minDq.shift()
        }
        i++
    }

    result = Math.max(result, j-i+1)

    j++
  }

  return result
}

// console.log(longestSubarray([8,2,4,7], 4));// 2 → [2,4] is valid
console.log(
 longestSubarray([10,1,2,4,7,2], 5));    // 4 → [2,4,7,2]
// longestSubarray([4,2,2,2,4,4,2,2], 0); // 3 → [4,4,4] or [2,2,2]
