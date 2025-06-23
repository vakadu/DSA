function decodeString(str) {
    let numStack = [], strStack = [], currStr = '', num = 0;

    debugger
    for(let s of str) {
        if(!isNaN(Number(s))) {
            num = num * 10 + Number(s)
        } else if(s === '[') {
            numStack.push(Number(num));
            strStack.push(currStr);
            num = 0;
            currStr = '';
        } else if(s === ']') {
            const strPop = strStack.pop();
            const numPop = numStack.pop();
            currStr = strPop + currStr.repeat(numPop)
        } else {
            currStr += s
        }
        
    }
    
    
    return currStr
}


// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Input: s = "3[a2[c]]"
// Output: "accaccacc"


// console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));

