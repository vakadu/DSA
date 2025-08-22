function maxSlidingWindow(nums, k) {
    let dq = [], res=[];

    for (let index = 0; index < nums.length; index++) {

        while(dq.length && nums[index] >= nums[dq[dq.length-1]]) {
            dq.pop()
        }
        
        dq.push(index);

        const left = index-k+1;
        while(dq.length && dq[0]<left) {
            dq.shift()
        }

        if(index>=k-1) {
            res.push(nums[dq[0]])
        }

    }

    return res
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3,3,5,5,6,7]
// console.log(maxSlidingWindow([1], 1));                 // [1]
// console.log(maxSlidingWindow([9,8,7,6,5], 2));         // [9,8,7,6]
// console.log(maxSlidingWindow([1,2,3,4,5], 4));         // [4,5]

