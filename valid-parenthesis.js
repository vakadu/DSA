let obj = {
    ')': '(',
    ']': '[',
    '}': '{'
}

function isValid(s) {
  let stack = [],
    strs = s.split("");

  for (let str of strs) {
    if(str === '(' || str === '[' || str === '{') {
        stack.push(str)
    } else if(stack[stack.length-1] === obj[str]) {
        stack.pop()
    } else {
        return false
    }
  }  

  return stack.length === 0;
}

isValid("()"); // true
isValid("()[]{}")     // true
isValid("(]")         // false
isValid("([)]")       // false
isValid("{[]}")       // true
