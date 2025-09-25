function searchRange(nums, target) {

  return [findFirst(nums, target), findLast(nums, target)]
}

function findLast(nums, target) {
  let ans = -1, s = 0,
    e = nums.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (nums[mid] === target) {
      ans = mid;
      s = mid+1
    } else if (nums[mid] < target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return ans;
}

function findFirst(nums, target) {
  let ans = -1, s = 0,
    e = nums.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (nums[mid] === target) {
      ans = mid;
      e = mid-1
    } else if (nums[mid] < target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return ans;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// [3,4]

console.log(searchRange([5,7,7,8,8,10], 6))
// // [-1,-1]

console.log(searchRange([], 0))
// // [-1,-1]

console.log(searchRange([1], 1))
// // [0,0]

console.log(searchRange([2,2,2,2,2], 2))
// // [0,4]
