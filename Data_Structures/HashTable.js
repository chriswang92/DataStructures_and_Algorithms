/* js based implementation of Hash Table - the most important data structure
https://www.educative.io/blog/data-strucutres-hash-table-javascript
 What is a hash table?
A hash table (often called a hash map) is a data structure that maps keys to values. 
Hash tables combine lookup, insert, and delete operations in an efficient way. 
The key is sent to a hash function that performs arithmetic operations on it. 
The result (called the hash value or hash) is an index of the key-value pair.
*/

class HashTable {
    constructor() {
        this.values = {};
        this.length = 0;
        this.size = 0;
    }

    print() {
        console.log(this.values);
    }

    /* The hash is an index of the key-value pair.
     returns the same hash for a given key. 
     A good hash function should be efficient to compute and uniformly distribute keys
     */
    calculateHash(key) {
        const hash = key.toString().length % this.length;
        console.log(key,this.length,hash);
        return hash;
    }

    add(key, value) {
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++;
        }
        this.values[hash][key] = value; // overwrites value on the same key 
        this.print();
    }

    delete(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash)) {
            if (this.values[hash].hasOwnProperty(key)) {
                this.length--;
                this.values[hash][key] = undefined;
            }
        }
        this.print();
    }

    lookup(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash)) {
            if (this.values[hash].hasOwnProperty(key)) {
                return this.values[hash][key];
            }
        }
    }
}

const ht = new HashTable();
console.log(ht.lookup('a'));
ht.add('a', 1);
ht.add('a', 2);
ht.add('b', 3);
console.log(ht.lookup('a'));
ht.delete('a');
console.log(ht.lookup('a'));



/**
 * Hash table collisions
Sometimes, a hash function can generate the same index for more than one key. This scenario is referred to as a hash collision. Collisions are a problem because every slot in a hash table is supposed to store a single element.

Hash collisions are usually handled using four common strategies.

Linear probing: Linear probing works by skipping over an index that is already filled. It could be achieved by adding an offset value to an already computed index. If that index is also filled, add it again and so on.

One drawback of using this strategy is that if you don’t pick an offset wisely, you can jump back to where you started and miss out on so many possible positions in the array.



Chaining: In the chaining strategy, each slot of our hash table holds a pointer to another data structure such as a linked list or a tree. Every entry at that index will be inserted into the linked list for that index.

As you can see, chaining allows us to hash multiple key-value pairs at the same index in constant time (insert at head for linked lists). This strategy greatly increases performance, but it is costly in terms of space.



Resizing the Array or List: Another way to reduce collisions is to resize the list or array. We can set a threshold and once it is crossed, we can create a new table which is double the size of the original. All we have to do then is to copy the elements from the previous table.

Resizing the list or array significantly reduces collisions, but the function itself is costly. Therefore, we need to be careful about the threshold we set. A typical convention is to set the threshold at 0.6, which means that when 60% of the table is filled, the resize operation needs to take place.

Double hashing: In double hashing, there are two hash functions. The second hash function is used to provide an offset value in case the first function causes a collision. Double hashing can find the next free slot faster than a linear probing approach. This is useful for applications with a smaller hash table.

The following function is an example of double hashing:

(firstHash(key) + i * secondHash(key)) % tableSize 
 */