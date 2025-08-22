function removeDuplicates(nums) {
    let count = 1;

    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if(element !== nums[index+1]) {
            nums[count] = nums[index+1];
            count++;
        }
    }
    return count - 1    
}

let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1)); // 2 → [1, 2, _]

let nums2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums2)); // 5 → [0,1,2,3,4,_,_,_,_,_]
