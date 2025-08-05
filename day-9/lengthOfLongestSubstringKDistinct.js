function lengthOfLongestSubstringKDistinct(s, k) {
    let i=0, j=0, map = new Map(), max = 0;

    while(j<s.length) {
        map.set(s[j], map.get(s[j])+1 || 1);

            while(map.size > k) {
                map.set(s[i], map.get(s[i])-1);

                if(map.get(s[i]) <= 0) {
                    map.delete(s[i])
                }
                i++;
            }

        max = Math.max(max, j-i+1)
        j++
    }

    return max

    //time -> o(n)
}

console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // 3 → "ece"
console.log(lengthOfLongestSubstringKDistinct("aa", 1));    // 2 → "aa"
