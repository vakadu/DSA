function shortestSubarray(nums, k) {
  // your code
  let dq=[], result=Infinity, prefix=[0];

  for (let index = 0; index < nums.length; index++) {
    prefix.push(prefix[prefix.length-1] + nums[index])    
  }  

  debugger
  for (let index = 0; index < prefix.length; index++) {

    while(dq.length && prefix[index] - prefix[dq[0]] >= k) {
        result = Math.min(result, index - dq[0])
        dq.shift()
    }

    while(dq.length && prefix[index] <= prefix[dq[dq.length-1]]) {
        dq.pop()
    }

    dq.push(index)
  }

  return result === Infinity ? -1 : result
}

console.log(shortestSubarray([2,-1,2], 3));                 // 3
// console.log(shortestSubarray([1], 1));                      // 1
// console.log(shortestSubarray([1,2], 4));                    // -1
// console.log(shortestSubarray([84,-37,32,40,95], 167));      // 3
// console.log(shortestSubarray([17,85,93,-45,-21], 150));     // 2
