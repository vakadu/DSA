function groupAnagrams(strs) {
    let map = new Map(), result = [];

    // for(let str of strs) {
    //     let temp = str.split('').sort().join('');
    //     if(map.has(temp)) {   
    //         const tempMap = [...map.get(temp), str];    
    //         map.set(temp, tempMap)
    //     } else {
    //         map.set(temp, [str])
    //     }     
    // }

      for (let str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

      return Array.from(map.values());

    
    for(let [_, val] of map) {
        result.push(val)
    }

    return result
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
