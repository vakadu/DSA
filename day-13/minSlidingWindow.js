function minSlidingWindow(nums, k) {
    let dq = [], res=[];

    for (let index = 0; index < nums.length; index++) {

        while(dq.length && nums[index] <= nums[dq[dq.length-1]]) {
            dq.pop()
        }

        dq.push(index);

        let left = index-k+1;
        while(dq.length && dq[0]<left) {
            dq.shift()
        }

        if(index>=k-1) {
            res.push(nums[dq[0]])
        }

    }

    return res
}

console.log(minSlidingWindow([4, 2, 12, 3, -1, 5], 2)); // [2, 2, 3, -1, -1]

