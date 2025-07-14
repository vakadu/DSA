function findRepeatedNonOverlapping(str, k) {
  let map = new Map(), result = [];

  for (let i = 0; i <= str.length - k; i++) {
    let temp = str.slice(i, i + k);
    if (!map.has(temp)) {
      map.set(temp, []);
    }
    map.get(temp).push(i);
  }

  for(let [key, indicies] of map.entries()) {
    indicies.sort((a,b) => a-b);
    
    for(let i=1; i<indicies.length; i++) {
        if(indicies[i] - indicies[i-1] >= 3) {
            result.push(key);
            break;
        }
    }
  }
  return result
}

console.log(findRepeatedNonOverlapping("abcabcabc", 3)); // ["abc", "bca", "cab"]
// console.log(findRepeatedNonOverlapping("ababab", 2));    // ["ab"]
// console.log(findRepeatedNonOverlapping("aaaa", 2));      // [] (they all overlap)
