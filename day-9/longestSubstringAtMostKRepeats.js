function longestSubstringAtMostKRepeats(s, k) {
    let i=0, j=0, map = new Map(), max=0;

    while(j<s.length) {
        map.set(s[j], map.get(s[j])+1 || 1);        

            while([...map.values()].some((item) => item > k)) {
                map.set(s[i], map.get(s[i])-1);

                if(map.get(s[i])<=0){
                    map.delete(s[i])
                }
                i++
            }

        max = Math.max(max, j-i+1)

        j++
    }

    return max
}

// console.log(longestSubstringAtMostKRepeats("aabbcc", 2)); // 6 → "aabbcc"
// console.log(longestSubstringAtMostKRepeats("aaabbcc", 2)); // 4 → "aabb"
// console.log(longestSubstringAtMostKRepeats("aaabbb", 3)); // 6 → "aaabbb"
// console.log(longestSubstringAtMostKRepeats("aaabbbc", 2)); // 4 → "aabb"
// console.log(longestSubstringAtMostKRepeats("abcde", 1)); // 5 → "abcde"
console.log(longestSubstringAtMostKRepeats("aabbc", 2));