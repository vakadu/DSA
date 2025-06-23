function groupArray(arr, groupSize) {
    let result =[]

    for(let i=0; i<arr.length; i+=groupSize) {
        let temp = arr.slice(i, i+groupSize);
        result.push(temp)        
    }
    return result
}

console.log(groupArray([1, 2, 3], 1));

// Input: arr = [1, 2, 3, 4, 5], groupSize = 2  
// Output: [[1,2],[3,4],[5]]

// Input: arr = [1, 2, 3, 4, 5, 6], groupSize = 3  
// Output: [[1,2,3],[4,5,6]]

// Input: arr = [1, 2, 3], groupSize = 1  
// Output: [[1],[2],[3]]

