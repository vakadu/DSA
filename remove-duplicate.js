function removeDuplicates(s) {
    let stack = [], set = new Set();

    for (const element of s) {
        if(stack.length && stack[stack.length-1] > element) {
            stack.pop()
        }
        stack.push(element)
    }
    console.log(stack);
    
}

// Input:  s = "bcabc"
// Output: "abc"

console.log(removeDuplicates("bcabc"));


