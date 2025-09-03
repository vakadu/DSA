function numSubarrayProductLessThanK(nums, k) {
    let count = 0, i=0, j=0, product=1;

    while(j<nums.length) {
        product *= nums[j];
        if(product >= k) {
            while(product >= k) {
                product/=nums[i]
                i++
            }
        }
        count += j-i+1
        j++
    }

    return count
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8
// console.log(numSubarrayProductLessThanK([1, 2, 3], 0));       // 0
// console.log(numSubarrayProductLessThanK([1, 1, 1], 2));       // 6
// console.log(numSubarrayProductLessThanK([1, 2, 3], 10));      // 6
// console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 10));  // 5
// console.log(numSubarrayProductLessThanK([1], 2));             // 1
// console.log(numSubarrayProductLessThanK([2], 2));             // 0
