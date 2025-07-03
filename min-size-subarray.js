function minSizeSubarray(nums, target) {
    let sum = 0, min = Number.MAX_SAFE_INTEGER, i=0, j=0;

    while(j<nums.length) {
        sum+=nums[j];

        if(sum === target) {
            min = Math.min(min, j-i+1);
            j++;
        } else if(sum > target) {
            while(sum>target) {
                sum-=nums[i];
                i++;
            }
            if(sum === target) {
                 min = Math.min(min, j-i+1);
            }
            j++
        } else {
                    j++;
        }
    }

    return min
}

// Input: target = 7, nums = [2,3,1,2,4,3]  
// Output: 2  
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// console.log(minSizeSubarray([2,3,1,2,4,3]  , 7));
console.log(minSizeSubarray([1, 1, 1, 1, 1, 1, 1, 7], 7));


