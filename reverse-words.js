function reverseWords(s) {
    s=s.trim();
    let result = [], current = "";

    for (let index = s.length-1; index >=0; index--) {
        const element = s[index];
        if(element === " ") {
            if (current.length > 0) {
                result.push(current);
                current = "";
            }            
        } else {
            current = element + current
        }
    }

    if (current.length > 0) {
        result.push(current);
    }

  return result.join(" ");
}

const s = "  the sky   is blue  ";
console.log(reverseWords(s));

