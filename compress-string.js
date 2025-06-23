function compressString(str) {
    // let curStr = '', count = 0, result = '';

    // for(let s of str) {
    //     if(curStr === s) {
    //         count++
    //     } else {
    //         if(curStr) {
    //             result += `${curStr}${count}`;            
    //         }
    //         curStr = s;
    //         count = 1;
    //     }
    // }

    // result += `${curStr}${count}`;

    // return result

    let result = '', count = 1;

    debugger
    for(let i=1; i<=str.length; i++) {
        if(str[i] === str[i-1]) {
            count++;
        } else {
            result += str[i-1] + count;
            count = 1;
        }
    }

    return result
}

let str = "aaaabbbccdaa"
// output = "a4b3c2d1a2"

// let str = "aabbcc";
// let output = "a2b2c2";

// let str = "abcd";
// output = "a1b1c1d1";


console.log(compressString(str));


