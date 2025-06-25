function longestSeq(seq) {
    seq.sort((a,b) => a-b);
    let max = 1, currSeq = 1;
    //[1,2,3,4,11,111]
    for(let i=1; i<seq.length; i++) {
        if(seq[i] === seq[i-1]+1) {
            currSeq++;
        } else {
            max = Math.max(max, currSeq);
            currSeq = 1
        }
    }

    return Math.max(max, currSeq)
}

const arr = [100, 4, 200, 1, 3, 2];
// const arr = [1, 2, 3, 5, 6, 7];

console.log(longestSeq(arr));

