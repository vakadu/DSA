function lengthOfLongestSubstringTwoDistinct(s) {
  let i = 0,
    j = 0,
    map = new Map(),
    max = 0;

  if (s.length < 2) {
    return s.length;
  }

  while (j < s.length) {
    map.set(s[j], map.get(s[j]) + 1 || 1);

    while (map.size > 2) {
      map.set(s[i], map.get(s[i]) - 1);

      if (map.get(s[i]) <= 0) {
        map.delete(s[i]);
      }

      i++;
    }

    max = Math.max(max, j - i + 1);
    j++;
  }

  //   ✅ Time Complexity: O(n)
  // The j pointer moves from left to right across the string once → O(n).

  // The i pointer also moves from left to right, but only when needed (each character is added and removed at most once from the map).

  // So although we have a nested while, it's not truly nested — both i and j combined move O(n) steps.

  // ✅ Final: O(n) — linear time

  return max;
}

// console.log(lengthOfLongestSubstringTwoDistinct("eceba"));             // 3 → "ece"
// console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"));           // 5 → "aabbb"
// console.log(lengthOfLongestSubstringTwoDistinct("a"));                 // 1 → "a"
// console.log(lengthOfLongestSubstringTwoDistinct(""));                  // 0 → ""
console.log(lengthOfLongestSubstringTwoDistinct("abcabcabc")); // 2 → "ab", "bc", etc.
// console.log(lengthOfLongestSubstringTwoDistinct("ababffzzeee"));       // 5 → "zzeee"
// console.log(lengthOfLongestSubstringTwoDistinct("aaabbbccc"));         // 6 → "aaabbb" or "bbbccc"
// console.log(lengthOfLongestSubstringTwoDistinct("abcbbbbcccbdddadacb"));// 10 → "bcbbbbccc"
