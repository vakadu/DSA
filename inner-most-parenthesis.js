function innerMost(str) {
  let stack = [],
    result = "",
    found = false;

  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] === "(") {
      stack.push({ key: "(", i });
      found = false
    } else if (str[i] === ")" && !found) {
      found = true;
      if (found) {
        let lastElem = stack[stack.length - 1];
        let temp = str.slice(lastElem.i, i + 1);
        result += temp;
      }
    }
  }

  if(str[0] !== '(' || str[0] !== ')') {
    let temp = str.slice(0,1);
    result = temp += result
  }  

  if(str[str.length-1] !== '(' || str[str.length-1] !== ')') {
    let temp = str.slice(str.length-1);
    result = result+=temp    
  }
  return result;
}

// let str = "a(b(c)d)e(f)g";
// output = "a(c)deg"

// let s = "x(y(z(a)b)c)d"
// → "x(a)d"

// let str = "p(q(r(s)))t"
// → "p(s)t"

// let str = "a(b(c(d)e)f)g"
// → "a(d)g"

let str = "((a)(b(c)))d"

console.log(innerMost(str));
