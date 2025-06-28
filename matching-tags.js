function collapseTags(str) {
  let i = 0, depth = 0, result = "";

  while (i < str.length) {
    let val = str[i];

    if (val === "<") {
      let j = i;
      while (str[j] !== ">") j++;
      const tag = str.slice(i, j + 1);

      if (tag.startsWith("</")) {
        depth--;
      } else {
        depth++;
      }

      i = j + 1; // Skip full tag
    } else if (depth === 0) {
      result += str[i];
      i++; // only increment here
    } else {
      i++; // skip content inside tags
    }
  }

  return result;
}


// let str = "<div>Hello <b>world</b></div>";
// Output: ""

let str = "<div>abc<b>bold</b>def</div>test";
// // Output: "test"

// let str = "<p>hello</p><span>123</span>"
// // Output: ""

// let str = "text<b>bold</b>text"
// // Output: "texttext"

console.log(collapseTags(str));
