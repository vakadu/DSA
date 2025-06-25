function removeAdjacentDuplicates(str) {
    let stack = [];

    for(let i=0; i<str.length;i++) {
        if(stack[stack.length-1] === str[i]) {
            
        } else {
            stack.push(str[i])
        }
    }

    return stack.join('')
}



// let str = "aabccdeeaa"
// → "bda"

let str = "abbbaca"
// // → "ca"

console.log(removeAdjacentDuplicates(str));

