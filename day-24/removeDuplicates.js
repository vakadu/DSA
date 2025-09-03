function removeDuplicates(s) {
    let stack = [];

    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if(stack.length && element === stack[stack.length-1]) {
            stack.pop()
        } else {
            stack.push(element)
        }
    }

    return stack.join('')
}

console.log(removeDuplicates("abbaca"));   // Output: "ca"
console.log(removeDuplicates("azxxzy"));   // Output: "ay"
console.log(removeDuplicates("aabbaa"));   // Output: ""
console.log(removeDuplicates("abcddcba")); // Output: ""
