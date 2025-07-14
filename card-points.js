function cardPoints(c, k) {
    // let i=0, j=c.length-1, sum=0;

    // while(k>0) {
    //     if(c[i] === c[j]) {
            
    //     } else if(c[i] > c[j]) {
    //         sum+=c[i];
    //         i++;
    //         k--
    //     } else {
    //          sum+=c[j];
    //         j--;
    //         k--
    //     }
        
    // }
    // return sum

    let sum=0;
    
    for(let i=0; i<k; i++) {
        sum+=c[i]
    }

    let max = sum;

    for(let i=1; i<=k;i++) {
        sum = sum - c[i-1] + c[c.length-i];
        max = Math.max(sum, max)
    }

    return max
}

// cardPoints = [1,2,3,4,5,6,1], k = 3
// // Pick 1 (last), 6, and 5 from the end: 6 + 5 + 1 = 12
// Output: 12

// cardPoints = [100,40,17,9,73,75], k = 3
// // Try all combinations of prefix/suffix totaling 3 elements
// Output: 248  // (100 from start, 73 + 75 from end)

console.log(cardPoints([1,2,3,4,5,6,1], 3));
// console.log(cardPoints([100,40,17,9,73,75], 3));

