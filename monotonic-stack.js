function nextGreaterToRight(nums) {
    let result = new Array(nums.length).fill(-1), stack = [];

    for(let i=0; i<nums.length; i++) {
        let value = nums[i];

        while(stack.length && value > nums[stack[stack.length-1]]) {
            const index = stack.pop();
            result[index] = value
        }
        stack.push(i)
    }

    return result
}

// Input:
const nums = [2, 1, 2, 4, 3];

// Output:
// const output = [4, 2, 4, -1, -1];

// console.log(nextGreaterToRight(nums));


function nextGreaterToLeft(nums) {
    let result = new Array(nums.length).fill(-1), stack = [];
    
    for(let i=nums.length-1; i>=0; i--) {        
        let value = nums[i];

        while(stack.length && value > nums[stack[stack.length-1]]) {
            const index = stack.pop();
            result[index] = value
        }
        stack.push(i)
    }

    return result
}

// Input:
// const nums2 = [2, 5, 1, 3, 4];
// const nums2 = [2, 1, 5, 3, 4];
const nums2 = [9,8,7,6];


// Output:
// const output = [-1, -1, 5, 5, 5];
// Explanation: For each element, the previous greater element to its left.

console.log(nextGreaterToLeft(nums2));


function nextSmallerToRight(nums) {
    let result = new Array(nums.length).fill(-1), stack = [];

    for(let i=0; i<nums.length; i++) {
        let value = nums[i];

        while(stack.length && value < nums[stack[stack.length-1]]) {
            const index = stack.pop();
            result[index] = value
        }
        stack.push(i)
    }

    return result
}

// Input:
const nums11 = [2, 5,1,3,4];
console.log(nextSmallerToRight(nums11));

