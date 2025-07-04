function longestSubstring(s, k) {
    let i=0, map=new Map(),j=0, max = 0;

    while(j<s.length) {
        map.set(s[j], map.get(s[j])+1 || 1);        

        if(map.size <= k) {    
                        max = Math.max(max, j - i + 1);


        } else {
            while(map.size > k) {
                map.set(s[i], map.get(s[i])-1); 
                if(map.get(s[i]) <= 0) {
                    map.delete(s[i])
                }
                i++;
            }
            j++;
        }
    }
    return max
}

// Input: s = "eceba", k = 2  
// Output: 3  
// Explanation: "ece" is the longest substring with at most 2 distinct characters.

console.log(longestSubstring("eceba", 2));

