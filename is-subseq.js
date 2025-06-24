function isSubsequence(str1, str2) {
    let i=0, j=0, max = str2.length;

        while(j<max) {
        if(str1[i] === str2[j]) {
            i++;
            j++;
        } else if(str1[i] !== str2[j]) {
            j++;
        }
    }

    return i === str1.length
}

// let str1 = "abc"; let str2 = "ahbgdc"
// output = true

let str1 = "axc"; let str2 = "ahbgdc"
// output = false

console.log(isSubsequence(str1, str2));

