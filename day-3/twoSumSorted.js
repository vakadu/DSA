// Given a sorted array of integers and a target,
// return the 1-based indices of the two numbers that add up to target.

function twoSumSorted(nums, target) {
  // your code here
  let left = 0, right = nums.length-1;

  while(left<right) {
    let sum = nums[right] + nums[left];
    if(sum === target) {
        return [left + 1, right + 1]
    } else if(sum > target) {
        right--
    } else {
        left++
    }
  }
  return []


  //wrong apppraoch
//   let i=0, j=0, sum=0, result=[];

//   while(j<nums.length) {
//     sum += + nums[j];
//     if(sum > target) {
//         while(sum>target) {
//             sum -= nums[i];
//             i++;
//         }
//     }

//     if(sum === target) {
//         result[0]=i+1;
//         result[1]=j+1;
//         break;
//     }

//     j++;
//   }

//   return result
}

// Example:
console.log(twoSumSorted([2, 7, 11, 15], 9)); // Output: [1, 2]
console.log(twoSumSorted([1, 2, 2, 3, 4], 4));
console.log(twoSumSorted([1, 3, 6, 12, 23, 45, 66, 77, 89], 100))
