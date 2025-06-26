function removeOuterParentheses(str) {
    let depth = 0, result = '';

    for (const element of str) {
        if(element === "(") {
            if(depth>0){
                result+=element
            }
            depth++
        } else {
            depth--;
            if(depth>0) {
                result+=element
            }
        }
    }
    console.log(result);
    
    return result
}

removeOuterParentheses("(()())(())");        // → "()()()"
removeOuterParentheses("(()())(())(()(()))") // → "()()()()(())"
removeOuterParentheses("()()")               // → ""
