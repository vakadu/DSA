function removeKdigits(num, k) {
    let stack = [];

    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        if(stack.length && element < stack[stack.length-1] && k>0) {
            stack.pop();
            k--;
        }
        stack.push(element)
    }

      while (k > 0) {
    stack.pop();
    k--;
  }

    while(stack.length && stack[0] === "0") {
        stack.shift()
    }

  return stack.length ? stack.join('') : '0';
}

console.log(removeKdigits("1432219", 3)); // "1219"
// removeKdigits("10200", 1);   // "200"
// removeKdigits("10", 2);      // "0"
