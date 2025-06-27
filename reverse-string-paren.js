function reverseInParens(s) {
    let stack = [], current = '';

    for(let char of s) {
        if(char === "(") {
            stack.push(current);
            current = ''
        } else if(char === ")") {
            current = stack.pop() + [...current].reverse().join('')
        } else {
            current+=char
        }
    }

    return current
}

let str = "(ab)(cd)"
// output = "badc"

console.log(reverseInParens("a(b(cd)e)f"));     // "afedcb"
console.log(reverseInParens("(ab)(cd)"));       // "badc"
console.log(reverseInParens("x(y(z))"));        // "xzy"
console.log(reverseInParens("((ab))"));         // "ab"
console.log(reverseInParens("a()b"));           // "ab"

