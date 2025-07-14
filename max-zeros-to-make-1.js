function maxZeroes(nums, k) {
    let i=0, j=0, max=0, zeroCount=0;

    while(j<nums.length) {
        if(nums[j]===0){
            zeroCount++;
        }

        if(zeroCount > k) {
            if(nums[i] === 0) {
                zeroCount--
            }
            i++
        }
        max = Math.max(max, j-i+1)
        j++;
    }

    return max
}

console.log(maxZeroes([1,1,1,0,0,0,1,1,1,1,0], 2));
// console.log(maxZeroes([0,0,1,1,1,0,0], 0));

