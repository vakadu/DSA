function remove(s,p) {
    let stack = [];

    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        stack.push(element);

        if(stack.length >= p.length && stack.slice(-p.length).join('') === p) {
            for(let i=0; i<p.length; i++) {
                stack.pop()
            }
        }
    }

    return stack.join('')
}

let s = "daabcbaabcbc";
let part = "abc";

console.log(remove(s, part));


