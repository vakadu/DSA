function removeGroupedDuplicates(str) {
    let i=0;

    while (i<str.length) {
        let j = i+1;
 
        while(j<str.length && str[i] === str[j]) {
            j++
        }

        if(j-i >= 2) {
            str = str.slice(0,i)+str.slice(j);
            i=0
        } else {
            i++
        }
    }

    return str
}


console.log(removeGroupedDuplicates("abbbca")); // "aca"
console.log(removeGroupedDuplicates("aabbbaca")); // "aca"
console.log(removeGroupedDuplicates("aaabbbcccd")); // "d"
