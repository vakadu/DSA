function findMaxAverage(nums, k) {
    let i=0, j=0, max=0,sum=0;

    for (let index = 0; index < k; index++) {
        const element = nums[index];
        sum+= element;
    }

    let tempAvg = sum / k;
    max = Math.max(max, tempAvg);
    j = k;

    while(j<nums.length) {
        sum += nums[j];
        sum -= nums[i];

        let temp = sum / k;
        max = Math.max(max, temp);

        i++;
        j++;
    }

    return max
    
  // your code here
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // → 12.75
console.log(findMaxAverage([5], 1)); // → 5.0

