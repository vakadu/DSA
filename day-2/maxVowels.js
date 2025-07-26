// Given a string s and an integer k, return the max number of vowels
// in any substring of length k.

const vowels = ["a", "e", "i", "o", "u"];

function maxVowels(s, k) {
  // your code here
  //   let i=0, j=k, max=0;

  //   while(j<=s.length) {
  //     const sStr = s.slice(i, j);
  //     const count = checkVowels(sStr);
  //     max = Math.max(max, count)
  //     j++;
  //     i++;
  //   }

  //   return max

  let count = 0,
    max = 0,
    set = new Set(["a", "e", "i", "o", "u"]);
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if(set.has(element)) {
        count++
    }

    if(index >= k) {
        if(set.has(s[index-k])) {
            count--
        }
    }

    max = Math.max(max, count)
  }

  return max
}

function checkVowels(s) {
  let count = 0;
  for (const element of s) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}

// Example:
console.log(maxVowels("abciiidef", 3)); // Output: 3 ("iii")
