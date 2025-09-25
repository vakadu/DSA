function searchInRotatedArray(nums, target) {
  const peak = findPeak(nums);
  const f = bs(nums, 0, peak, target);  
  const l = bs(nums, peak+1, nums.length-1, target);  
  
  if(f !== -1) return f;
  if(l !== -1) return l;

  return -1
}

function bs(nums, s, e, target) {
    while(s<=e) {
        let mid = Math.floor((s+e)/2);

        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] < target) {
            s = mid+1
        } else {
            e=mid-1
        }
    }
    return -1
}

function findPeak(nums) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if(nums[mid] > nums[mid+1]) {
        return mid
    }

    if(nums[mid] > nums[start]) {
        start = mid+1
    } else {
        end = mid-1
    }
  }

  return start
}

console.log(searchInRotatedArray([4,5,6,7,0,1,2], 0)) // 4
console.log(searchInRotatedArray([4,5,6,7,0,1,2], 3)) // -1
console.log(searchInRotatedArray([1], 0))             // -1
console.log(searchInRotatedArray([1], 1))             // 0
