function binarySearch(nums, target) {

    let start=0, end=nums.length-1;


    while(start<=end) {
        let mid = Math.floor((end+start)/2);

        if(nums[mid] === target) {
            return mid;
        }else if(nums[mid] < target) {
            start = mid+1
        } else {
            end = mid-1
        }
    }

    return -1;
}

// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9))
// // 4

// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2))
// // -1

// console.log(binarySearch([1, 2, 3, 4, 5], 1))
// // 0

console.log(binarySearch([1, 2, 3, 4, 5], 5))
// 4

// console.log(binarySearch([1, 2, 3, 4, 5], 6))
// // -1
