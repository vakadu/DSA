function reverseString(s) {
    let i=0, j=s.length-1;

    while(i<=j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp
        i++;
        j--
    }
}

let s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // ["o", "l", "l", "e", "h"]

let s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); // ["h", "a", "n", "n", "a", "H"]
