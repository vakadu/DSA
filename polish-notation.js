var evalRPN = function(tokens) {
    let stack = [], operands = ["*", "/", "+", "-"];

    for(let token of tokens) {
        if(operands.includes(token)) {
            let b = stack.pop();
            let a = stack.pop();
             let result;
            switch (token) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    result = Math.trunc(a / b);
                    break;
            }
             stack.push(result)
        } else {
            stack.push(Number(token))
        }
    }

    return stack[0]
};

// Input
const tokens = ["2","1","+","3","*"];
// Output
// 9
// Explanation: ((2 + 1) * 3) = 9

console.log(evalRPN(tokens));

