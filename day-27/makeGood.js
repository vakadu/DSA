function makeGood(s) {
    let stack = [];

    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        
        if(stack.length && Math.abs(stack[stack.length-1].charCodeAt(0) - element.charCodeAt(0)) === 32) {
            stack.pop()
        } else {
            stack.push(element)
        }
    }

    return stack.join('')
}

console.log(makeGood("leEeetcode")); // "leetcode"
