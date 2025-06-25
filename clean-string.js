function cleanString(str) {
    let stack = [];

    for(let char of str) {
        if(char === "#") {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.join('')
}

// let str = "abc#d##c"
// Output: "ac"

// let str = "abc##d######"
// Output: ""

let str = "#######"
// Output: ""

// let str = ""
// Output: ""

console.log(cleanString(str));
