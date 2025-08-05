function totalFruit(fruits) {
  // your code here
  let i=0, j=0,max=0,map=new Map();

  while(j<fruits.length) {
    map.set(fruits[j], map.get(fruits[j])+1 || 1);

    while(map.size > 2) {
        map.set(fruits[i], map.get(fruits[i])-1);

        if(map.get(fruits[i]) <= 0) {
            map.delete(fruits[i])
        }
        i++
    }

    max = Math.max(max, j-i+1)

    j++
  }

  return max
}

console.log(totalFruit([1, 2, 1])); // 3 → [1,2,1]
console.log(totalFruit([0, 1, 2, 2])); // 3 → [1,2,2]
console.log(totalFruit([1, 2, 3, 2, 2])); // 4 → [2,3,2,2]
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5 → [1,2,1,1,2]
