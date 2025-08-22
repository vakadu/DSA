function longestSubarraySumLEK(nums, k) {
  // your code here
  let dq=[], prefix=[0], result=0;

  for (let index = 0; index < nums.length; index++) { 
    prefix.push(prefix[prefix.length-1] + nums[index])   
  }

//   0 1 2 3 4 5 6 7
//   0 1 3 2 4 1 3 4
  
  for (let index = 0; index < prefix.length; index++) {

    while(dq.length && prefix[index] - prefix[dq[0]] <= k) {
        result = Math.max(result, index - dq[0]);
        // dq.shift()
        break;
    }

    while(dq.length && prefix[index] <= prefix[dq[dq.length-1]]) {
        dq.pop()
    }
    
    dq.push(index)
  }

  return result
}

console.log(longestSubarraySumLEK([1, 2, -1, 2, -3, 2, 1], 4));

