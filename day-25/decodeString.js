function decodeString(s) {
    let strStack=[], num=0, currentStr = '';

    debugger
    for (let index = 0; index < s.length; index++) {
        const element = s[index];

        if(!isNaN(element)) {
            num = num * 10 + Number(element)
        } else if(element === "[") {
            strStack.push([currentStr, num]);
            currentStr = "";
            num = 0;
        } else if(element === "]") {
            let [prev, n] = strStack.pop();
            currentStr = prev + currentStr.repeat(n)
        } else {
            currentStr += element
        }        
    }

    return currentStr
}

console.log(decodeString("3[a]2[bc]"))       // "aaabcbc"
console.log(decodeString("3[a2[c]]"))        // "accaccacc"
// console.log(decodeString("2[abc]3[cd]ef"))   // "abcabccdcdcdef"
