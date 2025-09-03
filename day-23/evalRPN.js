function evalRPN(tokens) {
    let stack = [];

    for (let index = 0; index < tokens.length; index++) {
        const element = Number(tokens[index]);
        if(isNaN(element)) {
            let t2 = stack.pop();
            let t1 = stack.pop();
            let result;
            switch(tokens[index]) {
                case '+':
                    result = t1+t2;
                    break;
                case '-':
                    result = t1-t2;
                    break;
                case '*':
                    result = t1*t2;
                    break;
                case '/':
                    result = Math.trunc(t1/t2);
                    break;
            }
            stack.push(result)
        } else {
            stack.push(element)
        }        
    }
    return stack[0]    
}


console.log(evalRPN(["2", "1", "+", "3", "*"]));        // (2 + 1) * 3 = 9
console.log(evalRPN(["4", "13", "5", "/", "+"]));       // 4 + (13 / 5) = 6
console.log(evalRPN(["10", "6", "9", "3", "/", "-", "*"])); // 10 * (6 - (9 / 3)) = 30
