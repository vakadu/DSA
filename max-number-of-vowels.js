function vowelsCheck(s,k) {
    // let i=0, max=0;
    // max = Math.max(max, vowels(s.slice(0, k)));
    // i=k;

    // while(i<s.length) {
    //     const tempStr = s.slice(i,i+k);
    //     max = Math.max(max, vowels(tempStr));        
    //     i++
    // }

    // return max

    let max=0, count=0, set=new Set(['a','e','i','o','u']);

    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if(set.has(element)) {
            count++
        }

        if(index >= k) {
            if(set.has(s[index-k])) {
                count--
            }
        }

        if(index >= k-1) {
            max = Math.max(max, count)
        }
    }

    return max
}

function vowels(s) {
    let count=0, vows =['a','e','i','o','u'];  
    
    for (const element of s) {
        if(vows.includes(element)) {
            count++
        }
    }    

    return count
}

// Input: s = "abciiidef", k = 3  
// Output: 3  
// Explanation: The substring "iii" contains 3 vowels.

console.log(vowelsCheck("abciiidef", 3));

