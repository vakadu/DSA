function removeDuplicates(s, k) {
    let stack = [];

    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if(stack.length && stack[stack.length-1].char === element) {
            stack[stack.length-1].count+=1;
            if(stack[stack.length-1].count >=k){
                stack.pop()
            }
        } else {
            stack.push({char: element, count: 1})
        }
    }
    
    let result = "";

    for (const {char, count} of stack) {
        result += char.repeat(count)
    }

    return result
}

console.log(removeDuplicates("aabbbacd", 3)); // should log: "cd"
