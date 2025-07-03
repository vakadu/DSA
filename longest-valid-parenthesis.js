function longestValid(s) {
    let stack = [], max=0;

    for(let i=0; i<s.length; i++) {
        if((s[i] === ")" && s[i+1] === "(")) {
            continue;
        } else if(s[i] === ")") {
            max = Math.max(max, stack.length);
        } else {
            stack.push(s[i])
        }
    }

    return max
}

// Input: ")()())"
// Output: 4
// // Explanation: longest valid is "()()"

console.log(longestValid(")()())"));

