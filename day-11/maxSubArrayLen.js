function maxSubArrayLen(nums, k) {
  // your code here
  let map = new Map(), sum=0, max=0;
    map.set(0, -1);

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        sum += element;

        if(map.has(sum-k)) {
            max = Math.max(max, index-map.get(sum-k))
        }

        if(!map.has(sum)) {
            map.set(sum, index)
        }
    }


    return max

}

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3)); // → 4 → [1, -1, 5, -2]
console.log(maxSubArrayLen([-2, -1, 2, 1], 1));    // → 2 → [-1, 2]
console.log(maxSubArrayLen([1, 2, 3], 3));         // → 2 → [1,2]
console.log(maxSubArrayLen([1, -1, 1, -1], 0));    // → 4 → entire array
console.log(maxSubArrayLen([1, 1, 1, 1], 2));      // → 2 → [1,1]
