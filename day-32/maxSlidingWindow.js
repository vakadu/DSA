function maxSlidingWindow(nums, k) {
    let dq =[], result = [];

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if(dq.length && dq[0] <= index-k) {
            dq.shift()
        }

        while(dq.length && nums[dq[dq.length-1]] < element) {
            dq.pop();
        }

        dq.push(index)

        if(index >= k-1) {
            result.push(nums[dq[0]])
        }
        
    }
    return result
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
