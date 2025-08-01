// Given an integer array nums and an integer k,
// return the number of subarrays whose sum is divisible by k.

function subarraysDivByK(nums, k) {
  // your code here

  let count = 0,
    sum = 0,
    map = new Map();
  map.set(0, 1);

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    sum += element;
    const remainder = ((sum % k) + k) % k;    

    if (map.has(remainder)) {
      count += map.get(remainder);
    }

    console.log(map);

    map.set(remainder, map.get(remainder) + 1 || 1);
  }

  return count;

  //   for (let index = 0; index < nums.length; index++) {
  //     let sum = 0

  //     for (let j = index; j < nums.length; j++) {
  //         const element = nums[j];
  //         sum += element;

  //         if(sum % k === 0) {
  //             count++
  //         }
  //     }

  //   }

  return count;

  //brute force
  //time complexity
  // o(n2) bcz we are using two loops

  //space coimplexity
  //o(1)


  //hashmap
  //time complexity
  // o(n) bcz we are using one loops

  //space coimplexity
  //o(k) bcz of map othere like count and sum are o(1)
}

// Example:
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)); // Output: 7
