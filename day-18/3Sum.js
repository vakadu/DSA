function threeSum(nums) {
    nums.sort((a,b) => a-b);

    let result = [];

    for (let index = 0; index < nums.length; index++) {
        let i=index+1, j=nums.length-1;

        if(index >0 && nums[i] === nums[i-1]) {
            continue;
        }

        while(i<j) {
            let sum = nums[index] + nums[i] + nums[j];

            if(sum === 0) {
                result.push([nums[index], nums[i], nums[j]]);
                i++;
                j--;

                while(i<j && nums[i] === nums[i-1]) {i++}
                while(i<j && nums[j] === nums[j+1]) {j--}

            } else if(sum > 0) {
                j--
            } else {
                i++
            }
        }
    }

    return result
    
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// // Expected Output: [[-1, -1, 2], [-1, 0, 1]]

// console.log(threeSum([0, 0, 0]));
// // Expected Output: [[0, 0, 0]]

// console.log(threeSum([3, -2, -1, 0]));
// Expected Output: [[-2, -1, 3]]

// console.log(threeSum([]));
// // Expected Output: []

// console.log(threeSum([-2, 0, 1, 1, 2]));
// // Expected Output: [[-2, 0, 2], [-2, 1, 1]]

console.log(threeSum([-2,0,0,2,2]));
//[[-2,0,2]]
