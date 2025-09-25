function insertInterval(intervals, newInterval) {
    intervals.sort((a,b) => a[0]-b[0]);
    let result = [], i=0;

    while(i<intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i])
        i++;
    }

    while(i<intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++
    }
    result.push(newInterval);

    while(i<intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    // let result = [], next = insert;

    // for (let index = 0; index < intervals.length; index++) {
    //     const first = intervals[index];
    //     if(first[1] >= next[0]) {
    //         next[0] = Math.min(next[0], first[0]);
    //         next[1] = Math.max(next[1], first[1]);
    //     } else {
    //         result.push(first)
    //     }
    // }
    // result.push(next)

    return result
}

console.log(insertInterval([[1,3],[6,9]], [2,5])); 
// [[1,5],[6,9]]

console.log(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); 
// // [[1,2],[3,10],[12,16]]

console.log(insertInterval([], [5,7])); 
// [[5,7]]
