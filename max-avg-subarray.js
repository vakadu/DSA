function maxAvg(nums, k) {
  let max = -Infinity,
    sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  max = sum/k

  for(let i=k; i<nums.length; i++) {
    sum = sum - nums[i-k] + nums[i];
    max = Math.max(max, sum/k)
  }
  return max

  //   while (i < nums.length) {
  //     const temp = nums.slice(i, i + k);
  //     if (temp.length === k) {
  //       const tempSum = temp.reduce((acc, curr) => {
  //         acc += curr;
  //         return acc;
  //       }, 0);
  //       const avg = tempSum / k;
  //       max = Math.max(max, avg)
  //     }

  //     i++;
  //   }

  //   return max
}

// Input:
const nums = [1, 12, -5, -6, 50, 3];
const k = 4;

// Output:
// Return the maximum average value of any subarray of size k.
// Expected Output: 12.75

console.log(maxAvg(nums, k));
