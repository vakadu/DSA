function minRemoveToMakeValid(s) {
    let stack = [], result = "";

    
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if(stack.length && element === ")" && stack[stack.length-1].element === "(") {
        stack.pop()
    } else if(element === "(") {
        stack.push({i:index, element})
    } else if(element === ")") {
        stack.push({i:index, element})
    }
  }

  for (let index = 0; index < stack.length; index++) {
    result = s.slice(0, stack[index].i) + s.slice(stack[index].i+1)
  }  

  return result
}

console.log(minRemoveToMakeValid("a)b(c)d"));         // Output: "ab(c)d"
console.log(minRemoveToMakeValid("))(("));            // Output: ""
console.log(minRemoveToMakeValid("(a(b(c)d)"));       // Output: "a(b(c)d)"
console.log(minRemoveToMakeValid("lee(t(c)o)de)"));   // Output: "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a((b(c)d)"));       // Output: "a(b(c)d)"

