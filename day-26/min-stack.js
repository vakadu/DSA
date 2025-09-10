class MinStack {
    constructor() {
        this.stack = [];
        this.min = []
    }

  push(val) {
    this.stack.push(val);
    if(this.min.length) {
        this.min.push(Math.min(val, this.min[this.min.length-1]))
    } else {
        this.min.push(val);
    }
  }

  pop() {
    this.stack.pop();
    this.min.pop()
  }

  top() {
    return this.stack[this.stack.length-1]
  }

  getMin() {
    return this.min[this.min.length-1]
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // ➝ -3
minStack.pop();
console.log(minStack.top());    // ➝ 0
console.log(minStack.getMin()); // ➝ -2
