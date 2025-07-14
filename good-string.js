function goodString(str) {
  // let i = 0;

  // while (i < str.length) {
  //   let j = i + 1;

  //   if (
  //     j < str.length &&
  //     (str[i].toUpperCase() === str[j] || str[i] === str[j].toUpperCase())
  //   ) {
  //     str = str.slice(0, i) + str.slice(j + 1);
  //     i = 0;
  //   } else {
  //     i++;
  //   }
  // }

  // return str;

  let stack = [];

  for (const element of str) {
    if(stack.length && Math.abs(stack[stack.length-1].charCodeAt() - element.charCodeAt()) === 32) {
      stack.pop()
    } else {
      stack.push(element)
    }
  }

  return stack.join('')
}

// let str = "leEeetcode"
// Output: "leetcode"

// let  str = "abBA"
// Output: ""

// let str = "s"
// Output: "s"

console.log(goodString("sSssS"));

// console.log(goodString(str));
