function isStringRotation(s1, s2) {
  let i = 0,
    j = 0;

  while (i < s1.length && j < s2.length) {
    if (s1[i] === s1[j]) {
      i++;
    } else {
      j++;
    }
  }
  console.log(i,j);
  
}

const s1 = "waterbottle";
const s2 = "erbottlewat";
console.log(isStringRotation(s1, s2));
