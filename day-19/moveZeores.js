function moveZeroes(nums) {
    let count = 0;

    for (let index = 0; index < nums.length; index++) {
        if(nums[index] !== 0)  {
            nums[count] = nums[index];
            count++
        }       
    }
    
    while(count < nums.length) {
        nums[count] = 0;
        count++
    }
}

let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // [1, 3, 12, 0, 0]

let nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // [0]

let nums3 = [1, 2, 3, 4];
moveZeroes(nums3);
console.log(nums3); // [1, 2, 3, 4]

let nums4 = [0, 0, 0, 1];
moveZeroes(nums4);
console.log(nums4); // [1, 0, 0, 0]

let nums5 = [0, 1, 0, 0, 2, 3];
moveZeroes(nums5);
console.log(nums5); // [1, 2, 3, 0, 0, 0]
