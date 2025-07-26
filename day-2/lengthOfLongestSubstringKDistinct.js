// Given a string s and integer k, return the length of the longest
// substring that contains at most k distinct characters.

function lengthOfLongestSubstringKDistinct(s, k) {
  // your code here

  if(k > s.length) {
    return s.length
  }

  let map = new Map(), i=0, j=0, max=0;

  while(j<s.length) {
    map.set(s[j], map.get(s[j])+1 || 1);

    if(map.size === k) {
        max = Math.max(max, j-i+1)
    }
    while(map.size > k){
        map.set(s[i], map.get(s[i])-1);

        if(map.get(s[i]) <= 0) {
            map.delete(s[i])
        }
        i++;
    }

    j++;
  }

  return max;
}

// Example:
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // Output: 3 ("ece")
console.log(lengthOfLongestSubstringKDistinct("abcabcabc", 3)); //9
console.log(lengthOfLongestSubstringKDistinct("abcdef", 2)); //2
console.log(lengthOfLongestSubstringKDistinct("aaabbb", 1)); //3
console.log(lengthOfLongestSubstringKDistinct("a", 1)); //1
console.log(lengthOfLongestSubstringKDistinct("", 3)); //0
console.log(lengthOfLongestSubstringKDistinct("aaaaaaa", 1)); //7
console.log(lengthOfLongestSubstringKDistinct("abc", 10)); //3
