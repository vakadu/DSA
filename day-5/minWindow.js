// Given two strings s and t, return the minimum window substring of s such that every character in t is included in the window. If there is no such substring, return "".

function minWindow(s, t) {
  // your code here
  let i = 0,
    j = 0,
    tMap = new Map(),
    str = "",
    matched = 0,
    sMap = new Map();

  for (const element of t) {
    tMap.set(element, tMap.get(element) + 1 || 1);
  }

  while (j < s.length) {
    sMap.set(s[j], sMap.get(s[j]) + 1 || 1);

    if (tMap.has(s[j]) && tMap.get(s[j]) === sMap.get(s[j])) {
      matched++;
    }

    while (matched === tMap.size) {
      if (str === "" || j - i + 1 < str.length) {
        str = s.slice(i, j + 1);
      }
      sMap.set(s[i], sMap.get(s[i]) - 1);

      if (tMap.has(s[i]) && sMap.get(s[i]) < tMap.get(s[i])) {
        matched--;
      }
      i++;
    }

    j++;
  }

  return str;
}

// Example:
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
