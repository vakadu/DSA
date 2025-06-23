function decompress(str) {
  let num = 0,
    result = "",
    currentStr = "";

  for (let s of str) {
    if (!isNaN(Number(s))) {
      num = num * 10 + Number(s);
    } else {
      if (currentStr && num > 0) {
        result += currentStr.repeat(num);
        num = 0;
      }
      currentStr = s;
    }
  }

  if (currentStr && num > 0) {
    result += currentStr.repeat(num);
  }

  return result;
}

let str = "a4b3c1";
// output = "aaaabbbc"

console.log(decompress(str));
