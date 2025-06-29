function slidingWindow(nums, k) {
    let result =[];

    for(let i=0; i<nums.length; i++) {
        let temp = nums.slice(i, i+k);
        if(temp.length < k) {
            continue;
        }
        result.push(Math.max(...temp))
    }    

    return result
}

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

console.log(slidingWindow([1,3,-1,-3,5,3,6,7], 3));


