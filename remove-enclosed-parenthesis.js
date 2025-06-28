function stripParentheses(str) {
    let depth=0, result=""

    for(let char of str) {
        if(char === "(") {
            depth++
        } else if(char === ")") {
            depth--;
        } else if(depth === 0) {
            result += char
        }
    }
    return result
}

// let str = "a(bc)d"
// Output: "ad"

let str = "a(b(cd)e)f";
// Output: "af"

// let str = "x(y(z(a)b)c)d"
// Output: "xd"

// let str = "ab(c(d(e)f)g)h"
// Output: "abh"

console.log(stripParentheses(str));
