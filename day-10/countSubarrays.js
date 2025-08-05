function countSubarrays(nums, k) {
    let i=0, map = new Map(), count=0, sum=0;
    map.set(0, 1);

    while(i<nums.length) {
        sum+=nums[i];
        let prefixSum = sum - k;

        if(map.has(prefixSum)) {
            count += map.get(prefixSum)
        }

        map.set(sum, map.get(sum)+1 || 1);
        i++;
    }

    return count
}

console.log(countSubarrays([2, 1, 3, 4, 1], 6)); // → 1
console.log(countSubarrays([1, 2, 1, 2, 1], 3)); // → 4
