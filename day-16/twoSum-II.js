/**
 * @param {number[]} numbers - a sorted array
 * @param {number} target - the target sum
 * @return {number[]} - 1-indexed positions of the two numbers
 */
function twoSum(numbers, target) {
  // Your two-pointer code goes here
  let i=0, j=numbers.length-1, result=[];

  while(i<j) {
    if(numbers[i] + numbers[j] === target) {
        result[0] = i+1;
        result[1] = j+1;
        break
    } else if(numbers[i] +numbers[j] > target) {
        j--
    } else {
        i++;
    }
  }

  return result
}

console.log(twoSum([2, 7, 11, 15], 9));         // ➞ [1, 2]
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8)); // ➞ [4, 5]
console.log(twoSum([1, 3, 4, 5, 7, 11], 10));   // ➞ [2, 5]
console.log(twoSum([5, 25, 75], 100));          // ➞ [2, 3]

