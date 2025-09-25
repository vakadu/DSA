function findMinInRotatedArray(nums) {
    let start = 0, end = nums.length-1, ans;

    while(start<end) {
        let mid = Math.floor((start+end)/2);

        if(nums[mid] < nums[end]) {
            end = mid
        } else {
            start = mid+1
        }
    }    

    return nums[start]
}

console.log(findMinInRotatedArray([3,4,5,1,2]));
console.log(findMinInRotatedArray([4,5,6,7,0,1,2]));
console.log(findMinInRotatedArray([11,13,15,17]));

