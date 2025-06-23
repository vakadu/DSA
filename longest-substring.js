function longestSubstring(str) {
    let i=0, j=0, map=new Map(), max=0;

    while(j<=str.length) {
        map.set(str[j], map.get(str[j])+1 || 1);

        if(map.get(str[j])>1) {

            while(map.get(str[j]) > 1) {
                map.set(str[i], map.get(str[i])-1);
                i++;

                if(map.get(str[i]) <= 0) {
                    map.delete(str[i])
                }
            }
            max = Math.max(max, j-i+1)
            j++;
        } else {
            j++;
        }
    }

    return max
}

console.log(longestSubstring('pwwkew'));

