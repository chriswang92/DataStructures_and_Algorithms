// https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65

class MinHeap {
    constructor() {
        /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = [];
    }
    // Time Complexity of accessing the min/max element in the heap is O(1).
    getMin() {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[0];
    }
    heapifyUp = current => {
        while (
            current > 0 &&
            this.heap[Math.floor((current - 1) / 2)] > this.heap[current]
        ) {
            console.log(current, Math.floor((current - 1) / 2));
            /* Swapping the child with its parent by using the ES6 destructuring syntax*/
            [this.heap[Math.floor((current - 1) / 2)], this.heap[current]] = [
                this.heap[current],
                this.heap[Math.floor((current - 1) / 2)],
            ];
            current = Math.floor((current - 1) / 2);
        }
    };
    heapifyDown = () => {
        let current = 0;
        let leftChild = 2 * current + 1;
        while (
            current < this.heap.length - 1 &&
            this.heap[current] > this.heap[leftChild]
        ) {
            console.log(current, leftChild, this.heap);
            /* Swapping the node with its left child by using the ES6 destructuring syntax*/
            [this.heap[leftChild], this.heap[current]] = [
                this.heap[current],
                this.heap[leftChild],
            ];
            current = leftChild;
            leftChild = 2 * current + 1;
            console.log(current, leftChild, this.heap);
        }
        console.log(current, leftChild, this.heap);
    };
    /**
     * As mentioned earlier, heaps are complete trees except for the last level. The new nodes are inserted from left to right and the heap property is maintained on every insertion.
     * If a child is inserted and bigger than its parent, then go up the chain and find a suitable place for it to swap.
     * If parent index is i, left child index = 2i+1, right child index = 2i+2. Therefore if child is i, then parent is Math.floor((i-1)/2)
     * The time complexity of inserting a new element in a binary heap is O(log n)
     */
    insert(node) {
        /* Inserting the new node at the end of the heap array */
        this.heap.push(node);

        /* Finding the correct position for the new node */
        if (this.heap.length > 1) {
            let current = this.heap.length - 1;
            /* Traversing up the parent node until the current node (current) is greater than the parent Math.floor(current-1/2)*/
            this.heapifyUp(current);
        }
    }

    remove() {
        if (this.heap.length === 1) {
            this.heap = [];
        } else if (this.heap.length === 2) {
            const onlyChild = this.heap[this.heap.length - 1];
            this.heap = [onlyChild];
        } else {
            // move the rightest node to root
            const rightestChild = this.heap[this.heap.length - 1];
            this.heap[0] = rightestChild; // put the last element at root
            // this.heap = this.heap.slice(0, this.heap.length - 1);
            this.heap.splice(-1, 1); // remove the right most node

            // balancing the heap
            this.heapifyDown();
        }
    }
}

const minHeap = new MinHeap();
// console.log(minHeap);
// minHeap.insert(10);
// console.log(minHeap);
// minHeap.insert(11);
// console.log(minHeap);
// minHeap.insert(6);
// console.log(minHeap);
// minHeap.insert(18);
// console.log(minHeap);
// minHeap.insert(4);
// console.log(minHeap);
// minHeap.remove();
// console.log(minHeap);
[10, 23, 36, 32, 38, 45, 57].forEach(x => minHeap.insert(x));
console.log(minHeap);
minHeap.remove();
console.log(minHeap);
