// function strStr(haystack, needle) {
//   if (needle.length === 0) return 0;

//   const lps = buildLPS(needle);

//   let i = 0,
//     j = 0;

//   while (i < haystack.length) {
//     if (haystack[i] === needle[j]) {
//       i++;
//       j++;

//       if (j === needle.length) {
//         return i - j;
//       }
//     } else {
//       if (j !== 0) {
//         j = lps[j - 1];
//       } else {
//         i++;
//       }
//     }
//   }

//   return -1;
// }

function buildLPS(pattern) {
  let lps = new Array(pattern.length).fill(0);
  let i=1, len=0;

  while(i<pattern.length) {
    if(pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
    } else {
        lps[i] = 0
        i++
    }
  }

  return lps;
}

console.log(buildLPS("aabaabaaa"));


// console.log(strStr("abcxabcdabcdabcy", "abcdabcy")); //➞ 8
