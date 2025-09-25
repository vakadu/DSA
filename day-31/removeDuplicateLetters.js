function removeDuplicateLetters(s) {
    let map = new Map();

    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        map.set(element, map.get(element)+1 || 1)
    }
    
    let stack = [], set = new Set();

    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        map.set(element, map.get(element)-1);
        if(set.has(element)) {
            continue;
        }

        if(stack.length && map.get(stack[stack.length-1]) > 0 && stack[stack.length-1] > element) {
            set.delete(stack.pop())
        }
        stack.push(element);
        set.add(element)
    }

    return stack.join('')
}

console.log(removeDuplicateLetters("cbacdcbc"));


