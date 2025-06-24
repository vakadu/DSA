function lengthOfRepeatingPrefix(str) {

    for(let i=0; i<str.length; i++) {
        let prefix = str.slice(0, i+1);
        let repeat = prefix.length%str.length;
        console.log(str.length/prefix.length);
        
        // if(prefix === prefix.repeat(repeat)) {
        //     return prefix.length
        // }                
    }

    return str.length
}

// let str = "abab"
// let str = "aaaa"

let str = "abcabc";
// output = 3  // "abc"
console.log(lengthOfRepeatingPrefix(str));

