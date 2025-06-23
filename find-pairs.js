function findPairs(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
        let temp = nums[i]+nums[j];
        if(temp === target) {
            if(!map.has(`${nums[i]}${nums[j]}`)) {
                map.set(`${nums[i]}${nums[j]}`, [nums[i], nums[j]])
            }
        }
    }
  }    

  return Array.from(map.values())
}

// Input: nums = [1, 2, 3, 4], k = 5

// Output:
// [[1,4],[2,3]]

// Input: 
// nums = [3, 1, 3, 4, 3], k = 6

// Output:
// [[3,3]]


console.log(findPairs([1, 2, 3, 4], 5));

console.log(findPairs([3, 1, 3, 4, 3], 6));
