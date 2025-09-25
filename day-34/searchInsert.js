function searchInsert(nums, target) {
    let s=0,e=nums.length-1;

    while(s<=e) {
        let mid = Math.floor((s+e)/2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] > target) {
            e = mid-1
        } else {
            s=mid+1
        }
    }

    return s
}

console.log(searchInsert([1,3,5,6], 5)) // 2
console.log(searchInsert([1,3,5,6], 2)) // 1
console.log(searchInsert([1,3,5,6], 7)) // 4
console.log(searchInsert([1,3,5,6], 0)) // 0
