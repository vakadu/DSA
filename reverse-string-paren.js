function reverseInParens(s) {
    let stack = [], result = "", charStack = [];

    for(let i=0; i<s.length; i++) {
        if(s[i] !== ')') {
            stack.push(s[i])
        }  else {
            let temp = [];
            while(stack.length && stack[stack.length -1] !== '(') {
                temp.push(stack.pop())
            }
            stack.pop();

            for(let char of temp) {
                stack.push(char)
            }
        }
    }
    
    return stack.join('')
}

let str = "(ab)(cd)"
// output = "badc"

console.log(reverseInParens("a(b(cd)e)f"));     // "afedcb"
console.log(reverseInParens("(ab)(cd)"));       // "badc"
console.log(reverseInParens("x(y(z))"));        // "xzy"
console.log(reverseInParens("((ab))"));         // "ab"
console.log(reverseInParens("a()b"));           // "ab"

