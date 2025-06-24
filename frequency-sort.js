function freqSort(s) {
    let map = new Map(), result = '';

    for(let char of s) {
        map.set(char, map.get(char) + 1 ||1)
    }

    Array.from(map.entries()).sort((a, b) => b[1]-a[1]).map((item) => {
        result = result + item[0].repeat(item[1])
    })
    
    return result
}

console.log(freqSort('tree'));


function freqSort(str) {
  const freq = new Map();

  // Step 1: Count frequencies
  for (let char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // Step 2: Build buckets where index = frequency
  const buckets = [];

  debugger
  for (let [char, count] of freq.entries()) {
    if (!buckets[count]) {
      buckets[count] = [];
    }
    buckets[count].push(char);
  }

  // Step 3: Rebuild result from buckets, high to low
  let result = '';
  for (let i = buckets.length - 1; i > 0; i--) {
    if (buckets[i]) {
      for (let char of buckets[i]) {
        result += char.repeat(i);
      }
    }
  }

  return result;
}
console.log(freqSort('treeeyy'));