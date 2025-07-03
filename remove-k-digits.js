function removeKDigits(num, k) {
    let stack = [];

    for(let n of num) {
        while(stack.length && k>0 && stack[stack.length-1] > n) {
            stack.pop();
            k--;
        }
        stack.push(n)
    }

    while (stack.length && stack[0] === '0') {
        stack.shift();
    }

    return stack.length ? stack.join('') : "0";
}

// Input: num = "1432219", k = 3
// Output: "1219"

// console.log(removeKDigits("10200", 1));
console.log( removeKDigits("10200", 1) );
    // "200"

