// Given a string s and an integer k,
// you can replace up to k characters to make a substring with repeating letters.
// Return the length of the longest valid window.

function characterReplacement(s, k) {
  // your code here
  let i=0, j=0, map=new Map(), maxCount=0, max=0;

  while(j<s.length) {
    map.set(s[j], map.get(s[j])+1 || 1);
    maxCount = Math.max(maxCount, map.get(s[j]));

    while((j-i+1)-maxCount > k) {
       map.set(s[i], map.get(s[i])-1);
      i++;
    }
    
    max = Math.max(max, j-i+1)
    j++
  }

  return max
}

// Example:
console.log(characterReplacement("ABAB", 2));     // Output: 4
console.log(characterReplacement("AABABBA", 1));  // Output: 4
