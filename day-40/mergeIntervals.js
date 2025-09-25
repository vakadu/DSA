function mergeIntervals(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);

    let result = [], current = intervals[0];
    for (let index = 1; index < intervals.length; index++) {
        let next = intervals[index];

        if(current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1])
        } else {
            result.push(current)
            current = next
        }        
    }
    result.push(current)

    return result
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); 
// [[1,6],[8,10],[15,18]]

console.log(mergeIntervals([[1,4],[4,5]])); 
// // [[1,5]]

console.log(mergeIntervals([[6,8],[1,9],[2,4],[4,7]])); 
// [[1,9]]
