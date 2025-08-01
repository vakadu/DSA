// Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]]
// such that i != j != k and nums[i] + nums[j] + nums[k] == 0

function threeSum(nums) {
  // your code here
  nums.sort((a, b) => a - b);

  let result = [];

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if(index > 0 && nums[index] === nums[index-1]) {
        continue
    }

    let i = index + 1,
      j = nums.length - 1;
    
    while (i < j) {
    let sum = element + nums[i] + nums[j];

      if (sum === 0) {
        result.push([nums[index], nums[i], nums[j]])
        i++;
        j--;
        while(i<j && nums[i] === nums[i-1]) {
            i++
        }
        while(i<j && nums[j] === nums[j+1]) {
            j--
        }
      } else if (sum < 0) {
        i++;
      } else {
        j--;
      }
    }
  }

  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Expected: [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([0, 0, 0, 0]));
// Expected: [[0, 0, 0]]

console.log(threeSum([1, 2, -2, -1]));
// Expected: []

console.log(threeSum([-2, 0, 1, 1, 2]));
// Expected: [[-2, 0, 2], [-2, 1, 1]]

console.log(threeSum([1]));
// Expected: []

console.log(threeSum([1, -1]));
// Expected: []

console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
// Expected: multiple unique triplets (validate length & no duplicates)
