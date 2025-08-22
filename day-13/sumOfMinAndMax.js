function sumOfMinAndMax(nums, k) {
  // your code
  let res = [];

  let minDQ = minDq(nums, k);
  let maxDQ = maxDq(nums, k);
  
  for (let index = 0; index < minDQ.length; index++) {
    const val1 = minDQ[index];
    const val2 = maxDQ[index];    
    res.push(val2+val1)
  }

  return res
}

function minDq(nums, k) {
    let result = [], dq=[];

    for (let index = 0; index < nums.length; index++) {
        while(dq.length && nums[index] <= nums[dq[dq.length-1]]) {
            dq.pop()
        }

        dq.push(index);

        let left = index - k+1;
        while(dq.length && dq[0] < left) {
            dq.shift()
        }        

        if(index >= k-1) {
            result.push(nums[dq[0]])
        }
    }

    return result
}

function maxDq(nums, k) {
    let result = [], dq=[];

    for (let index = 0; index < nums.length; index++) {
        while(dq.length && nums[index] >= nums[dq[dq.length-1]]) {
            dq.pop()
        }

        dq.push(index);

        let left = index - k+1;
        while(dq.length && dq[0] < left) {
            dq.shift()
        }        

        if(index >= k-1) {
            result.push(nums[dq[0]])
        }
    }

    return result
}

console.log(sumOfMinAndMax([2, 5, -1, 7, -3, -1, -2], 4)); // [6, 4, 4, 4]
console.log(sumOfMinAndMax([1,2,3,4,5], 2));               // [3,5,7,9]
console.log(sumOfMinAndMax([5,4,3,2,1], 3));               // [8,6,4]
console.log(sumOfMinAndMax([1,1,1,1], 3));                 // [2,2]
console.log(sumOfMinAndMax([-2,0,-1,3], 2));               // [-2,-1,2]
