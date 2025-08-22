function removeDuplicates(nums) {
    let count=1;

    for (let index = 1; index < nums.length; index++) {
        let currCount = 1;
        if(nums[index] !== nums[index-1]) {
            nums[count] = nums[index];
        } else if(currCount >= 2) {
            currCount = 1;
            nums[count] = nums[index];
        } else {
            currCount = currCount+1;
            count++
        }
    }

    return count
}

let nums1 = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums1), nums1); // Expected output: 5, nums1 mutated to [1, 1, 2, 2, 3, _]

let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums2), nums2); // Expected output: 7, nums2 mutated to [0, 0, 1, 1, 2, 3, 3, _, _]

let nums3 = [1, 1, 1, 1, 1];
console.log(removeDuplicates(nums3), nums3); // Expected output: 2, nums3 mutated to [1, 1, _, _, _]

let nums4 = [1, 2, 3];
console.log(removeDuplicates(nums4), nums4); // Expected output: 3, nums4 remains [1, 2, 3]

let nums5 = [];
console.log(removeDuplicates(nums5), nums5); // Expected output: 0, []
