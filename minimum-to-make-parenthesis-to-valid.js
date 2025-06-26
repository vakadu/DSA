function minAddToMakeValid(str) {
    let stack = [];

    for(let char of str) {
        if(char === ")" && stack[stack.length-1] === "(") {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.length
}

// let str = "())"
// Output: 1

// let str = "((("
// // Output: 3

// let str = "()"
// // Output: 0

// let str = "()))(("
// // Output: 4

// let str = ""
// Output: 0

// let str = "("
// // Output: 1

// str = ")"
// // Output: 1

// let str = "(()(()"
// // Output: 2

// let str = "())(()"
// // Output: 2

let str = "(()))(()))"
// // Output: 4

// str = "(()())())(()(()))"
// // Output: 1


console.log(minAddToMakeValid(str));

