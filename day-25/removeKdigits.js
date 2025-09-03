function removeKdigits(n, k) {
    let stack = [];

    
    for (let index = 0; index < n.length; index++) {
        const element = n[index];
        while(stack.length && stack[stack.length-1] > element && k>0) {
            stack.pop();
            k--;
        }
        stack.push(element)
    }
    
    while (k > 0) {
        stack.pop();
        k--;
    }

    const result = stack.join('').replace(/^0+/, '');

    return result === '' ? '0' : result;

}

// console.log(removeKdigits("1432219", 3)); // "1219"
// console.log(removeKdigits("10200", 1));   // "200"
// console.log(removeKdigits("10", 2));      // "0"
console.log(removeKdigits("123456", 3));  // "123"
// console.log(removeKdigits("112", 1));     // "11"
// console.log(removeKdigits("10001", 4));   // "0"
