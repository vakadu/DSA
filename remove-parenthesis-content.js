function removeParenthesesContent(str) {
    let stack = [], result = '';

    for(let s of str) {
        if(s === '(') {
            stack.push(s)
        } else if(stack.length > 0) {
            if(s === ')') {
                stack.pop()
            }
        } else {
            result += s
        }
    }

    return result
}


// let input = "a(b(c)d)e"
// output = "ae"

// let input = "x(y(z))"
// output = "x"

let input = "a(b(cd)e)f"
// output = "af"


console.log(removeParenthesesContent(input));


