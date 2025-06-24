function removeConsecutiveDuplicates(str) {
    let result = '', set = new Set();

    for(let char of str) {

        if(!set.has(char)) {
            result+=char
        }
        set.add(char);
    }

    // for(let i=1; i<str.length; i++) {
    //     if(str[i] === str[i-1]) {
    //         continue
    //     } else {
    //         result += str[i]
    //     }
    // }

    return result;
}

let str = "aabcc"
// output = "abc"

// let str = "aaaaaa"
// output = "a"

// let str = "abcabcabc"
// output = "abc"


console.log(removeConsecutiveDuplicates(str));


