function minRemoveToMakeValid(str) {
    let stack = [];

    for(let i=0; i<str.length; i++) {
        let char = str[i];
        if(stack.length && char === ")" && stack[stack.length-1].char === "(") {
            stack.pop()
        } else if(char === "(") {
            stack.push({char, i})
        } else if(char === ")") {
            stack.push({char,i})
        }
    }
    console.log(stack);
    

     for (let { i } of [...stack].reverse()) {
    str = str.slice(0, i) + str.slice(i + 1);
  }
    
    return str
}


// let str = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"

// let str = "a)b(c)d"
// Output: "ab(c)d"

let str = "))(("
// Output: ""

console.log(minRemoveToMakeValid(str));

