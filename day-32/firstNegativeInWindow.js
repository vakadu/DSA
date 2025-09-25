function firstNegativeInWindow(nums, k) {
  let dq = [],
    result = [];

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if(dq.length && dq[0] <= index-k) {
        dq.shift()
    }

    while (dq.length && Math.sign(element) === -1 && nums[dq[dq.length - 1]] < element) {
        dq.pop()
    }

    if (Math.sign(element) === -1) {
      dq.push(index);
    }
    
    if(index >= k-1) {
        result.push(dq.length ? nums[dq[0]] : 0)
    }
  }

  return result;
}

console.log(firstNegativeInWindow([12, -1, -7, 8, -15, 30, 16, 28], 3)); //[-1, -1, -7, -15, -15, 0]
