function longestSubarrayAtMostK(nums, k) {
    let max = 0, map=new Map(), sum=0;
    map.set(-1, 0)

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        sum += element;

        if(map.get(sum-k)) {
            max = Math.max(max, index - map.get(sum-k))
        }

        map.set(sum, index)

    }

    return max
}

console.log(longestSubarrayAtMostK([1, 2, -1, 2, -3, 2, 1], 4)); // 7  (whole array)
console.log(longestSubarrayAtMostK([2, -1, 2], 3));              // 3
console.log(longestSubarrayAtMostK([4, 2, 1], 3));               // 2  ([2,1])
console.log(longestSubarrayAtMostK([5, 6], 4));                  // 0
console.log(longestSubarrayAtMostK([5, -2, 3], 4));              // 2
console.log(longestSubarrayAtMostK([-1, -1, -1], -2));           // 3
console.log(longestSubarrayAtMostK([1e9, -1e9, 1e9], 1e9));      // 3
