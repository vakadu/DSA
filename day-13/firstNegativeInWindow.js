function firstNegativeInWindow(nums, k) {
    let dq=[], res=[];

    for (let index = 0; index < nums.length; index++) {
        
        if(nums[index] < 0) {
            dq.push(index);
        }

        let left = index-k+1;

        while(dq.length && dq[0] < left) {
            dq.shift()
        }

        if(index>=k-1) {
            res.push(nums[dq[0]])
        }
    }

    return res;
}

// quick tests
console.log(firstNegativeInWindow([12, -1, -7, 8, -15, 30, 16, 28], 3)); // [-1, -1, -7, -15, -15, 0]
// console.log(firstNegativeInWindow([1, 2, 3, 4], 2));                      // [0, 0, 0]
// console.log(firstNegativeInWindow([-5, -2, -3, -4], 2));                  // [-5, -2, -3]
// console.log(firstNegativeInWindow([2, -1, 3, -2, 4, -3], 3));             // [-1, -1, -2, -2]
