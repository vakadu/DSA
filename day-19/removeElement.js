function removeElement(nums, val) {
    let count = 0;

    for (let index = 0; index < nums.length; index++) {
        if(nums[index] !== val) {
            nums[count] = nums[index]
            count++;
        }
    }
    

    return count;
}

console.log(removeElement([3,2,2,3], 3));         // Output: 2 (array becomes [2,2,_,_])
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // Output: 5 (array becomes [0,1,3,0,4,_,_,_])
console.log(removeElement([1,1,1,1], 1));         // Output: 0 (array becomes [_,_,_,_])
console.log(removeElement([1,2,3,4], 5));         // Output: 4 (no element removed)
