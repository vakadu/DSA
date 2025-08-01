// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  // your code here
  let i = 0,
    j = 0,
    map = new Map(),
    max = 0;

  while (j < s.length) {
    map.set(s[j], map.get(s[j]) + 1 || 1);

    if (map.get(s[j]) > 1) {
      while (map.get(s[j]) > 1) {
        map.set(s[i], map.get(s[i]) - 1);
        i++;
      }
      j++;
    } else {
      max = Math.max(max, j - i + 1);
      j++;
    }
  }

  return max;
}

// Example:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("abcdef"));
// Output: 6 → whole string
console.log(lengthOfLongestSubstring("aaaaaa")); 
// Output: 1 → just one "a"
console.log(lengthOfLongestSubstring("")); 
// Output: 0
console.log(lengthOfLongestSubstring("pwwkew")); 
// Output: 3 → "wke"
console.log(lengthOfLongestSubstring("abba")); 
// Output: 2 → "ab" or "ba"
console.log(lengthOfLongestSubstring("123!@#123")); 
// Output: 6 → "123!@#"
