// js based implementation of Hash Table - the most important data structure

/* What is a hash table?
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

    // The hash is an index of the key-value pair
    calculateHash(key) {
        return key.toString().length % this.size;
    }

    add(key, value) {
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++;
        }
        this.values[hash][key] = value;
    }

    delete(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash)) {
            if (this.values[hash].hasOwnProperty(key)) {
                this.length--;
                this.values[hash][key] = undefined;
            }
        }
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
console.log(ht.lookup('a'));
ht.delete('a');
console.log(ht.lookup('a'));
