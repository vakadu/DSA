function firstNegativeInWindow(arr, k) {
    let res = [], dq=[];

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] < 0) {
            dq.push(index)
        }

        while(dq[0] <= index-k) {
            dq.shift()
        }

        if(index>=k-1) {
            res.push(dq.length ? arr[dq[0]] : 0)
        }
    }

    return res
}

// quick tests
console.log(firstNegativeInWindow([12, -1, -7, 8, -15, 30, 16, 28], 3)); // [-1, -1, -7, -15, -15, 0]
// console.log(firstNegativeInWindow([1, 2, 3, 4], 2));                      // [0, 0, 0]
// console.log(firstNegativeInWindow([-5, -2, -3, -4], 2));                  // [-5, -2, -3]
// console.log(firstNegativeInWindow([2, -1, 3, -2, 4, -3], 3));             // [-1, -1, -2, -2]
