let map = {
  ")": "(",
  "]": "[",
  "}": "{",
};

function isValid(s) {
  let stack = [];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (map[element]) {
      const top = stack.pop();
      if (map[element] !== top) {
        return false;
      }
    } else {
      stack.push(element);
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}")); // true ✅
console.log(isValid("{[()]}")); // true ✅
console.log(isValid("([)]")); // false ❌
console.log(isValid("{[(])}")); // false ❌
console.log(isValid("((({{{[[[]]]}}})))")); // true ✅
