// 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // get a map of {key: x, value: frequency}, O(n)
    const frequencyMap = new Map();
    for (const n of nums) {
        frequencyMap.set(n, (frequencyMap.get(n) || 0) + 1);
    }

    //  make a bucket to store numbers of each frequency, O(n)
    const bucket = [];
    for (const [n, freq] of frequencyMap) {
        bucket[freq] = bucket[freq] || [];
        bucket[freq].push(n);
    }

    // Select k numbers from end of bucket, O(n)
    let result = [];
    for (let i = bucket.length - 1; i >= 0; i--) {
        const current = bucket[i];
        if (current) {
            const countLeft = k - result.length;
            if (countLeft >= current.length) {
                result.push(...current);
            } else {
                result.push(bucket.slice(0, countLeft));
            }
            if (result.length === k) break;
        }
    }
    
    return result;
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1, 2], 2));
const input3 = [1, 1, 1, 2, 2, 3];
const input2 = [1, 2];
const input = [4, 1, -1, 2, -1, 2, 3];
const input4 = [5, 3, 1, 1, 1, 3, 73, 1];
const k = 2;
console.log(topKFrequent(input4, k));
// console.log(topKFrequent(input3, k));
// console.log(topKFrequent(input2, k));
// console.log(topKFrequent(input, k));
