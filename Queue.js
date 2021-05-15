class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
        console.log(this.queue);
    }

    dequeue() {
        this.queue.shift();
        console.log(this.queue);
    }
}

const queue = new Queue();
queue.dequeue()
queue.enqueue({a:'1'})
queue.dequeue()
queue.enqueue(1)
queue.enqueue({a:'2'})
queue.enqueue('b')
queue.dequeue()