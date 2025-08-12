// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.



function minSubArrayLen(target, nums) {
    let i=0, j=0,min=Number.MAX_SAFE_INTEGER,sum=0;

    while(j<nums.length) {
        sum += nums[j];

        while(sum >= target) {
            min=Math.min(min, j-i+1);
            sum -= nums[i];
            i++;
        }
        j++
    }

    return min === Number.MAX_SAFE_INTEGER ? 0 : min
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // Output: 2 → [4,3]
console.log(minSubArrayLen(4, [1,4,4]));       // Output: 1 → [4]
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); // Output: 0 → none
