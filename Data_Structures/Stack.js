class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
        console.log(stack);
    }
    pop() {
        this.stack.pop();
        console.log(stack);
    }
}

const stack = new Stack();
stack.push(1);
stack.pop();
stack.push(1);
stack.push(1);
stack.pop();
