function groupNumbersByRemainders(nums, divisor) {
    let result = {};

    for(let num of nums) {
        let div = num % divisor;
        if(!result[div]) {
            result[div] = [num]
        } else {
            result[div].push(num)
        }
    }
    return result
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const divisor = 3;

// {
//   0: [3, 6, 9],
//   1: [1, 4, 7],
//   2: [2, 5, 8]
// }


console.log(groupNumbersByRemainders(nums, divisor));

