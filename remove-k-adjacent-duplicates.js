function removeDuplicates(str, k) {
    // let i=0;

    // while(i<str.length) {
    //     let j= i+1;

    //     while(j<str.length && str[i] === str[j]) {
    //         j++;
    //     }

    //     if(j-i >= k) {
    //         str = str.slice(0,i)+str.slice(j);
    //         i=0
    //     } else {
    //         i++;
    //     }
    // }

    // return str

    let stack = [];

    for(let char of str) {
        if(stack.length && char === stack[stack.length-1].char) {
            stack[stack.length-1].count++
        } else {
            stack.push({char, count:1})
        }

        if(stack.length && stack[stack.length-1].count === k) {
            stack.pop()
        }
    }

    return stack.map(element => {
        return element.char.repeat(element.count)
    }).join('');
    
}

// let str = "abcd", k = 2
// Output: "abcd"  (no group of 2 to remove)

// let str = "deeedbbcccbdaa", k = 3
// Step 1: "dee**edb**bcccbdaa" → "ddbcccbdaa"
// Step 2: "**ddbccc**bdaa" → "ddbdaa"
// Step 3: "**ddbdaa**" → "aa"
// Final Output: "aa"

let str = "pbbcggttciiippooaais", k = 2
// Output: "ps"


console.log(removeDuplicates(str, k));
