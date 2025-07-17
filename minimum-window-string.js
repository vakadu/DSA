function minimumWindow(s, t) {
    let tMap = new Map, sMap = new Map(), i=0, j=0;

    for(let char of t) {
        tMap.set(char, tMap.get(char) + 1 || 1)
    }
    
    while(j<s.length) {
        if(tMap.has(s[j])) {
            tMap.set(s[j], tMap.get(s[j])-1)
        }
        j++;
    }
    
}

console.log(minimumWindow("ADOBECODEBANC", "ABC"));

